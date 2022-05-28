import fetch from 'node-fetch';

export const getEthBalance = async (
  addresses: string[]
): Promise<{
  status: string;
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
  const url = `https://api.etherscan.io/api?${new URLSearchParams(params)}`;

  const response = await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return response.json();
};
