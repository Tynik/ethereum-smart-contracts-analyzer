import type {
  Processor,
  SolEntity,
  SolInterface,
  SolLibrary,
  Handler,
  SolContract,
  SolError,
  SolIssue,
} from './types';

import { Instruction } from './constants';
import { log, addSolIssue } from './helpers';

export const initExecuteHandler: Handler = () => {
  let brackets = 0;
  let previousWord: string = null;
  // const executeHandler: ReturnType<typeof initExecuteHandler> = null;

  let name: string = null;

  return ({ rowNumber, colNumber, word }) => {
    if (word === ')') {
      brackets -= 1;
      if (brackets === -1) {
        throw new Error(`Syntax Error: Closed bracket error at [${rowNumber}:${colNumber}]`);
      }
      return true;
    }
    if (word === '(') {
      brackets += 1;
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      name = previousWord;
      return true;
    }
    previousWord = word;
    return Boolean(brackets);
  };
};

export const pragmaProcessor: Processor<void, [string[], SolIssue[]]> = () => {
  let step: 'language' | 'versions' = null;

  return ({ rowNumber, colNumber, word }) =>
    (versions, issues) => {
      if (step === 'versions') {
        if (word === ';') {
          step = null;
          return;
        }
        versions.push(word);

        if (['^', '<', '>'].includes(word[0])) {
          addSolIssue({
            id: 'SWC-103',
            version: word,
            position: [rowNumber, colNumber],
            issues,
          });
        }
        return;
      }
      if (step === 'language') {
        if (word === Instruction.SOLIDITY) {
          step = 'versions';
        }
        return;
      }
      if (word === Instruction.PRAGMA) {
        step = 'language';
      }
    };
};

export const commentProcessor: Processor<boolean> = (verbose = false) => {
  let isInlineComment = false;
  let isMultilineComment = false;
  let previousWord = null;

  const debug = () => {
    if (verbose) {
      log('IS_INLINE_COMMENT:', isInlineComment, 'IS_MULTILINE_COMMENT:', isMultilineComment);
    }
  };

  return ({ word, wordsDistance }) =>
    () => {
      if (isInlineComment) {
        if (word === '\n') {
          isInlineComment = false;
          previousWord = null;
        }
        debug();
        return isInlineComment;
      }
      if (isMultilineComment) {
        // should not be spaces between */
        if (previousWord === '*' && word === '/' && !wordsDistance) {
          isMultilineComment = false;
        }
        debug();
        previousWord = word;
        return isMultilineComment;
      }
      if (previousWord === '/') {
        if ((word === '/' || word === '*') && !wordsDistance) {
          if (word === '/') {
            isInlineComment = true;
          } else {
            isMultilineComment = true;
          }
          debug();
          return true;
        }
      }
      debug();
      previousWord = word;
      return false;
    };
};

export const stringProcessor: Processor<boolean> = (verbose = false) => {
  let strMode: string = null;
  let previousWord: string = null;

  const debug = ({ word }) => {
    if (verbose) {
      log('STR_MODE:', strMode || '-', 'WORD: ', word);
    }
  };

  return ({ word }) =>
    () => {
      if (word === '"' || word === "'") {
        if (
          (strMode === '"' && word === "'") ||
          (strMode === "'" && word === '"') ||
          previousWord === '\\'
        ) {
          debug({ word });
          return true;
        }
        strMode = strMode ? null : word;
        return true;
      }
      if (previousWord === '\\' && word === '\\') {
        previousWord = null;
      } else {
        previousWord = word;
      }
      debug({ word });
      return Boolean(strMode);
    };
};

export const interfaceProcessor: Processor<SolInterface, [SolInterface[]]> = () => {
  let step: 'name' | 'is' | 'body' = null;
  let braces = 0;
  let interfaceEntity: SolInterface = null;
  let executeHandler: ReturnType<typeof initExecuteHandler> = null;

  return ({ rowNumber, colNumber, word }) =>
    interfaces => {
      if (step === 'body') {
        if (word === '{') {
          braces += 1;
          return interfaceEntity;
        }
        if (word === '}') {
          braces -= 1;
          if (braces === -1) {
            throw new Error(
              `Syntax Error: Close brace index error } = ${braces} at [${rowNumber}:${colNumber}]`
            );
          }
          if (!braces) {
            step = null;
            interfaceEntity = null;
          }
        }
        return interfaceEntity;
      }

      if ((step === 'name' || step === 'is') && word === '{') {
        braces += 1;
        step = 'body';
        executeHandler = null;
        return interfaceEntity;
      }

      if (step === 'is') {
        if (executeHandler && executeHandler({ rowNumber, colNumber, word })) {
          return interfaceEntity;
        }
        if (word === ',') {
          return interfaceEntity;
        }
        interfaceEntity.is = interfaceEntity.is || [];
        interfaceEntity.is.push(word);
        // we suppose that parent entity call be called here
        executeHandler = initExecuteHandler();
        executeHandler({ rowNumber, colNumber, word });
        return interfaceEntity;
      }

      if (step === 'name') {
        if (word === 'is') {
          step = 'is';
          return interfaceEntity;
        }
        interfaceEntity = {
          name: word,
        };
        interfaces.push(interfaceEntity);
        return interfaceEntity;
      }

      if (word === Instruction.INTERFACE) {
        step = 'name';
      }
      return interfaceEntity;
    };
};

export const libraryProcessor: Processor<SolLibrary, [SolLibrary[]]> = () => {
  let step: 'name' | 'body' = null;
  let braces = 0;
  let libraryEntity: SolLibrary = null;

  return ({ rowNumber, colNumber, word }) =>
    libraries => {
      if (step === 'body') {
        if (word === '{') {
          braces += 1;
          return libraryEntity;
        }
        if (word === '}') {
          braces -= 1;
          if (braces === -1) {
            throw new Error(
              `Syntax Error: Close brace index error } = ${braces} at [${rowNumber}:${colNumber}]`
            );
          }
          if (!braces) {
            step = null;
            libraryEntity = null;
          }
        }
        return libraryEntity;
      }
      if (step === 'name') {
        if (word === '{') {
          braces += 1;
          step = 'body';
          return libraryEntity;
        }
        libraryEntity = {
          name: word,
        };
        libraries.push(libraryEntity);
        return libraryEntity;
      }
      if (word === Instruction.LIBRARY) {
        step = 'name';
      }
      return libraryEntity;
    };
};

export const contractProcessor: Processor<SolContract, [SolContract[]]> = () => {
  let step: 'name' | 'is' | 'body' = null;
  let braces = 0;
  let abstract = false;
  let contractEntity: SolContract = null;
  let executeHandler: ReturnType<typeof initExecuteHandler> = null;
  let previousWord: string = null;

  return ({ rowNumber, colNumber, word }) =>
    contracts => {
      if (step === 'body') {
        if (word === '{') {
          braces += 1;
          return contractEntity;
        }
        if (word === '}') {
          braces -= 1;
          if (braces === -1) {
            throw new Error(
              `Syntax Error: Close brace index error } = ${braces} at [${rowNumber}:${colNumber}]`
            );
          }
          if (!braces) {
            step = null;
            contractEntity = null;
          }
        }
        return contractEntity;
      }

      if ((step === 'name' || step === 'is') && word === '{') {
        braces += 1;
        step = 'body';
        executeHandler = null;
        return contractEntity;
      }

      if (step === 'is') {
        if (executeHandler && executeHandler({ rowNumber, colNumber, word })) {
          return contractEntity;
        }
        if (word === ',') {
          return contractEntity;
        }
        contractEntity.is = contractEntity.is || [];
        contractEntity.is.push(word);
        // we suppose that parent entity call be called here
        executeHandler = initExecuteHandler();
        executeHandler({ rowNumber, colNumber, word });
        return contractEntity;
      }

      if (step === 'name') {
        if (word === 'is') {
          step = 'is';
          return contractEntity;
        }
        contractEntity = {
          name: word,
          ...(abstract && { abstract }),
        };
        contracts.push(contractEntity);
        return contractEntity;
      }

      if (word === Instruction.CONTRACT) {
        step = 'name';
        abstract = previousWord === Instruction.ABSTRACT;
      }
      previousWord = word;
      return contractEntity;
    };
};

export const functionProcessor: Processor<
  void,
  [
    options: {
      issues: SolIssue[];
      interfaceEntity: SolInterface;
      libraryEntity: SolLibrary;
      contractEntity: SolContract;
    }
  ]
> = (verbose = false) => {
  let step: 'name' | 'args' | 'params' | 'returns' | 'body' = null;
  let braces = 0;

  return ({ rowNumber, colNumber, word }) =>
    ({ interfaceEntity, libraryEntity, contractEntity, issues }) => {
      const entity = interfaceEntity || libraryEntity || contractEntity;
      const functionEntity = entity?.functions?.[entity.functions.length - 1];

      const addIssue = (id: SolIssue['id']) => {
        addSolIssue({
          id,
          position: [rowNumber, colNumber],
          issues,
          functionEntity,
          interfaceEntity,
          libraryEntity,
          contractEntity,
        });
      };

      if (verbose) {
        log(`FUNCTION_STEP: ${step}`);
      }

      if (step === 'body') {
        if (word === '}') {
          braces -= 1;
          if (braces === -1) {
            throw new Error(
              `Syntax Error: Close brace index error } at [${rowNumber}:${colNumber}]`
            );
          }
          if (!braces) {
            step = null;
          }
        }
        if (
          word === Instruction.SELF_DESTRUCT &&
          !functionEntity.modifiers &&
          !functionEntity.requires
        ) {
          addIssue('SWC-106');
        }
        if (word === 'tx.origin') {
          addIssue('SWC-115');
        }
        return;
      }

      if (step === 'returns') {
        if (word === '(' || word === ')') {
          return;
        }
        if (word === ';') {
          step = null;
          return;
        }
        if (word === '{') {
          braces += 1;
          step = 'body';
          return;
        }
        return;
      }

      if (step === 'params') {
        if (word === Instruction.RETURNS || word === '{' || word === ';') {
          if (
            // make sure it's not the constructor
            functionEntity.name !== entity.name &&
            !functionEntity.public &&
            !functionEntity.private &&
            !functionEntity.internal &&
            !functionEntity.external
          ) {
            addIssue('SWC-100');
          }
        }
        if (word === Instruction.RETURNS) {
          step = 'returns';
          return;
        }
        if (word === '{') {
          braces += 1;
          step = 'body';
          return;
        }
        if (word === ';') {
          step = null;
          return;
        }
        if (word === Instruction.PRIVATE) {
          functionEntity.private = true;
        } else if (word === Instruction.INTERNAL) {
          functionEntity.internal = true;
        } else if (word === Instruction.EXTERNAL) {
          functionEntity.external = true;
        } else if (word === Instruction.PUBLIC) {
          functionEntity.public = true;
        } else if (word === Instruction.VIEW) {
          functionEntity.view = true;
        } else if (word === Instruction.VIRTUAL) {
          functionEntity.virtual = true;
        } else if (word === Instruction.PURE) {
          functionEntity.pure = true;
        } else if (word === Instruction.OVERRIDE) {
          functionEntity.override = true;
        } else if (word === Instruction.PAYABLE) {
          functionEntity.payable = true;
        } else if (word === Instruction.CONSTANT) {
          functionEntity.constant = true;

          addIssue('SWC-111');
        } else {
          functionEntity.modifiers = functionEntity.modifiers || [];
          functionEntity.modifiers.push({
            name: word,
          });
        }
        return;
      }

      if (step === 'args') {
        if (word === '(') {
          return;
        }
        if (word === ')') {
          step = 'params';
          return;
        }
        return;
      }

      if (step === 'name') {
        entity.functions = entity.functions || [];
        entity.functions.push({
          name: word === '(' ? undefined : word,
        });
        step = 'args';
        return;
      }
      if (word === Instruction.FUNCTION) {
        step = 'name';
      }
    };
};

export const eventProcessor: Processor<void, [SolEntity]> = () => {
  let step: 'name' | 'args' = null;

  return ({ word }) =>
    entity => {
      if (word === ';') {
        step = null;
        return;
      }
      if (step === 'name') {
        entity.events = entity.events || [];
        entity.events.push({
          name: word,
        });
        step = 'args';
        return;
      }
      if (word === Instruction.EVENT) {
        step = 'name';
      }
    };
};

export const enumProcessor: Processor<void, [SolEntity]> = () => {
  let step: 'name' | 'list' = null;

  return ({ word }) =>
    entity => {
      if (step === 'list') {
        if (word === '{') {
          return;
        }
        if (word === '}') {
          step = null;
        }
        return;
      }
      if (step === 'name') {
        entity.enums = entity.enums || [];
        entity.enums.push({
          name: word,
        });
        step = 'list';
        return;
      }
      if (word === Instruction.ENUM) {
        step = 'name';
      }
    };
};

export const errorProcessor: Processor<void, [SolEntity | undefined, SolError[]]> = () => {
  let step: 'name' | 'args' = null;

  return ({ word }) =>
    (entity, errors) => {
      if (word === ';') {
        step = null;
        return;
      }
      if (step === 'name') {
        if (entity) {
          entity.errors = entity.errors || [];
        }
        (entity?.errors ?? errors).push({
          name: word,
        });
        step = 'args';
        return;
      }
      if (word === Instruction.ERROR) {
        step = 'name';
      }
    };
};

export const mappingProcessor: Processor<
  void,
  [
    {
      libraryEntity: SolLibrary;
      contractEntity: SolContract;
      issues: SolIssue[];
    }
  ]
> = () => {
  let step: 'structure' | 'visibility_name' = null;
  let brackets = 0;
  let previousWord: string = null;

  return ({ rowNumber, colNumber, word }) =>
    ({ libraryEntity, contractEntity, issues }) => {
      const entity = libraryEntity || contractEntity;

      if (word === ';') {
        step = null;
        previousWord = null;
        return;
      }
      if (step === 'visibility_name') {
        if (
          word === Instruction.PRIVATE ||
          word === Instruction.INTERNAL ||
          word === Instruction.PUBLIC
        ) {
          previousWord = word;
          return;
        }
        entity.variables.push({
          name: word,
          ...(previousWord === Instruction.PRIVATE && { private: true }),
          ...(previousWord === Instruction.INTERNAL && { internal: true }),
          ...(previousWord === Instruction.PUBLIC && { public: true }),
        });

        const variable = entity.variables[entity.variables.length - 1];

        if (!variable.public && !variable.private && !variable.internal) {
          addSolIssue({
            id: 'SWC-100',
            position: [rowNumber, colNumber],
            libraryEntity,
            contractEntity,
            issues,
          });
        }
        return;
      }
      if (step === 'structure') {
        if (word === '(') {
          brackets += 1;
          return;
        }
        if (word === ')') {
          brackets -= 1;
          if (brackets === -1) {
            throw new Error(`Syntax Error: Closed bracket error at [${rowNumber}:${colNumber}]`);
          }
          if (!brackets) {
            step = 'visibility_name';
          }
          return;
        }
        return;
      }
      if (word === Instruction.MAPPING) {
        entity.variables = entity.variables || [];
        step = 'structure';
      }
    };
};
