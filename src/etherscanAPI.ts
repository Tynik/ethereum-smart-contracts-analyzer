import fetch from 'node-fetch';

import type { ETHNetwork } from './types';

const ETHERSCAN_API_URLS: Partial<Record<ETHNetwork, string>> = {
  mainnet: 'https://api.etherscan.io/api/',
  goerli: 'https://api-goerli.etherscan.io/',
  kovan: 'https://api-kovan.etherscan.io/',
  rinkeby: 'https://api-rinkeby.etherscan.io/',
  ropsten: 'https://api-ropsten.etherscan.io/',
};

export const getEthBalance = async (
  network: ETHNetwork,
  addresses: string[]
): Promise<{
  status: '1' | string;
  message: 'OK' | 'NOTOK';
  result: { account: string; balance: string }[];
}> => {
  const params = {
    module: 'account',
    action: 'balancemulti',
    tag: 'latest',
    apikey: process.env.ETHERSCAN_API_KEY,
    address: addresses.join(','),
  };
  const url = `${ETHERSCAN_API_URLS[network]}?${new URLSearchParams(params)}`;

  const response = await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return response.json();
};
