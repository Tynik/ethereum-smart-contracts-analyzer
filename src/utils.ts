import { RESERVED_CHARS } from './constants';
import {
  pragmaProcessor,
  commentProcessor,
  stringProcessor,
  interfaceProcessor,
  libraryProcessor,
  contractProcessor,
  functionProcessor,
  eventProcessor,
  errorProcessor,
  enumProcessor,
} from './processors';
import { log } from './helpers';

type WordsProcessor = (options: {
  rowNumber: number;
  colNumber: number;
  word: string;
  wordsDistance: number;
}) => void;

export const parseFile = (
  content: string,
  wordsProcessor: WordsProcessor,
  reservedChars: string[] = []
) => {
  for (
    let charIndex = 0, prevCharIndex = -1, word = '', rowNumber = 1, colNumber = 0;
    charIndex < content.length;
    charIndex += 1
  ) {
    const currentChar = content[charIndex];
    const isReservedChar = reservedChars.includes(currentChar);

    colNumber += 1;

    if (!isReservedChar && currentChar !== ' ') {
      word += currentChar;
      // eslint-disable-next-line no-continue
      continue;
    }
    if (!word && !isReservedChar) {
      // eslint-disable-next-line no-continue
      continue;
    }

    const wordsDistance = charIndex - prevCharIndex - 1;
    prevCharIndex = charIndex;

    if (word) {
      wordsProcessor({
        rowNumber,
        colNumber,
        word,
        wordsDistance,
      });
    }

    if (isReservedChar) {
      wordsProcessor({
        rowNumber,
        colNumber,
        word: currentChar,
        wordsDistance,
      });
    }
    word = '';

    if (currentChar === '\n') {
      rowNumber += 1;
      colNumber = 0;
    }
  }
};

export const parseSolFile = (
  sourceCode: string,
  callback: (api: {
    pragmaHandler: ReturnType<ReturnType<typeof pragmaProcessor>>;
    commentHandler: ReturnType<ReturnType<typeof commentProcessor>>;
    stringHandler: ReturnType<ReturnType<typeof stringProcessor>>;
    interfaceHandler: ReturnType<ReturnType<typeof interfaceProcessor>>;
    libraryHandler: ReturnType<ReturnType<typeof libraryProcessor>>;
    contractHandler: ReturnType<ReturnType<typeof contractProcessor>>;
    functionHandler: ReturnType<ReturnType<typeof functionProcessor>>;
    eventHandler: ReturnType<ReturnType<typeof eventProcessor>>;
    errorHandler: ReturnType<ReturnType<typeof errorProcessor>>;
    enumHandler: ReturnType<ReturnType<typeof enumProcessor>>;
    rowNumber: number;
    colNumber: number;
    word: string;
  }) => void,
  verbose = false
) => {
  const pragmaHandler = pragmaProcessor(verbose);
  const commentHandler = commentProcessor(verbose);
  const stringHandler = stringProcessor(verbose);
  const interfaceHandler = interfaceProcessor(verbose);
  const libraryHandler = libraryProcessor(verbose);
  const contractHandler = contractProcessor(verbose);
  const functionHandler = functionProcessor(verbose);
  const eventHandler = eventProcessor(verbose);
  const errorHandler = errorProcessor(verbose);
  const enumHandler = enumProcessor(verbose);

  const debug = ({ rowNumber, colNumber, word }) => {
    if (verbose) {
      log(`'ROW: ${rowNumber} | COL: ${colNumber} | WORD: ${JSON.stringify(word)}`);
    }
  };

  parseFile(
    sourceCode,
    ({ rowNumber, colNumber, word, wordsDistance }) => {
      debug({ rowNumber, colNumber, word });

      callback({
        pragmaHandler: pragmaHandler({ rowNumber, colNumber, word, wordsDistance }),
        commentHandler: commentHandler({ rowNumber, colNumber, word, wordsDistance }),
        stringHandler: stringHandler({ rowNumber, colNumber, word, wordsDistance }),
        interfaceHandler: interfaceHandler({ rowNumber, colNumber, word, wordsDistance }),
        libraryHandler: libraryHandler({ rowNumber, colNumber, word, wordsDistance }),
        contractHandler: contractHandler({ rowNumber, colNumber, word, wordsDistance }),
        functionHandler: functionHandler({ rowNumber, colNumber, word, wordsDistance }),
        eventHandler: eventHandler({ rowNumber, colNumber, word, wordsDistance }),
        errorHandler: errorHandler({ rowNumber, colNumber, word, wordsDistance }),
        enumHandler: enumHandler({ rowNumber, colNumber, word, wordsDistance }),
        rowNumber,
        colNumber,
        word,
      });
    },
    RESERVED_CHARS
  );
};

export const updateReadme = () => {};
