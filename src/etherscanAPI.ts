import fetch from 'node-fetch';

import type { ETHNetwork } from './types';

const ETHERSCAN_API_URLS: Partial<Record<ETHNetwork, string>> = {
  mainnet: 'https://api.etherscan.io/api/',
  goerli: 'https://api-goerli.etherscan.io/',
  kovan: 'https://api-kovan.etherscan.io/',
  rinkeby: 'https://api-rinkeby.etherscan.io/',
  ropsten: 'https://api-ropsten.etherscan.io/',
};

export const sendEtherscanRequest = async <R = any>(
  network: ETHNetwork,
  params: Record<string, string | number>
): Promise<R> => {
  const convertedParams = Object.keys(params).reduce<Record<string, string>>(
    (result, paramKey) => ({ ...result, [paramKey]: params[paramKey].toString() }),
    {}
  );

  const url = `${ETHERSCAN_API_URLS[network]}?${new URLSearchParams({
    ...convertedParams,
    apikey: process.env.ETHERSCAN_API_KEY,
  })}`;

  const response = await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return response.json();
};

type GetContractBalance = (
  network: ETHNetwork,
  addresses: string[]
) => Promise<{
  status: '1' | string;
  message: 'OK' | 'NOTOK';
  result: { account: string; balance: string }[];
}>;

export const getContractBalance: GetContractBalance = async (network, addresses) =>
  sendEtherscanRequest(network, {
    module: 'account',
    action: 'balancemulti',
    tag: 'latest',
    address: addresses.join(','),
  });

type GetContractNormalTransactions = (
  network: ETHNetwork,
  address: string,
  options: {
    startBlock?: number;
    endBlock?: number;
    sort?: 'asc' | 'desc';
    page?: number;
    perPage?: number;
  }
) => Promise<{
  status: '1' | string;
  message: 'OK' | 'NOTOK';
  result: {
    blockNumber: string;
    timeStamp: string;
    hash: string;
    nonce: string;
    blockHash: string;
    transactionIndex: string;
    from: string;
    to: string;
    value: string;
    contractAddress: string;
    input: string;
    type: 'create' | 'call';
    gas: string;
    gasPrice: string;
    gasUsed: string;
    cumulativeGasUsed: string;
    confirmations: string;
    traceId: string;
    isError: '0';
    errCode?: string;
    txreceipt_status: '1';
  }[];
}>;

export const getContractNormalTransactions: GetContractNormalTransactions = async (
  network,
  address,
  { startBlock, endBlock, sort, page, perPage }
) => {
  return sendEtherscanRequest(network, {
    module: 'account',
    action: 'txlist',
    page: page || 1,
    offset: perPage || 10,
    sort: sort || 'asc',
    startblock: startBlock || 0,
    endblock: endBlock || 99999999,
    address,
  });
};
