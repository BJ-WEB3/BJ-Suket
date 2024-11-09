require('colors');
const axios = require('axios');
const fs = require('fs');

const PROXY_SOURCES = {
  'BJ 1': 'https://gist.githubusercontent.com/lxnrdn/122e160dc1bbf7fb031ed41c8c8feee8/raw/9fd1b08a8e6d0cbea9011925d63748b3ee9f6af7/BJ1.txt',
  'BJ 2': 'https://gist.githubusercontent.com/lxnrdn/e8050b9ffed405a89260d136a74f6163/raw/f7a78d3451b24ecc63ec51d49e8aeccfe9a1b834/BJ2.txt',
  'BJ 3': 'https://gist.githubusercontent.com/lxnrdn/77d36f6be2bfd730d381ebc66367a48f/raw/dfbfce388dcebf22d52b73ab5bcdb3b39f0125da/BJ3.txt',
};

async function fetchProxies(url) {
  try {
    const response = await axios.get(url);
    console.log(`\nFetched proxies from ${url}`.green);
    return response.data.split('\n').filter(Boolean);
  } catch (error) {
    console.error(`Failed to fetch proxies from ${url}: ${error.message}`.red);
    return [];
  }
}

async function readLines(filename) {
  try {
    const data = await fs.promises.readFile(filename, 'utf-8');
    console.log(`Loaded data from ${filename}`.green);
    return data.split('\n').filter(Boolean);
  } catch (error) {
    console.error(`Failed to read ${filename}: ${error.message}`.red);
    return [];
  }
}

async function selectProxySource(inquirer) {
  const choices = [...Object.keys(PROXY_SOURCES), 'CUSTOM', 'NO PROXY'];
  const { source } = await inquirer.prompt([
    {
      type: 'list',
      name: 'source',
      message: 'Select proxy source:'.cyan,
      choices,
    },
  ]);

  if (source === 'CUSTOM') {
    const { filename } = await inquirer.prompt([
      {
        type: 'input',
        name: 'filename',
        message: 'Enter the path to your proxy.txt file:'.cyan,
        default: 'proxy.txt',
      },
    ]);
    return { type: 'file', source: filename };
  } else if (source === 'NO PROXY') {
    return { type: 'none' };
  }

  return { type: 'url', source: PROXY_SOURCES[source] };
}

module.exports = { fetchProxies, readLines, selectProxySource };
