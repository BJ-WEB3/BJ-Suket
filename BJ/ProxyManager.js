require('colors');
const axios = require('axios');
const fs = require('fs');

const PROXY_SOURCES = {
  'BJ 1': 'https://raw.githubusercontent.com/monosans/proxy-list/refs/heads/main/proxies/all.txt',
  'BJ 2': 'https://raw.githubusercontent.com/monosans/proxy-list/refs/heads/main/proxies_anonymous/all.txt',
  'BJ 3': 'https://gist.githubusercontent.com/BJ-WEB3/d319d24596430267114fffdb727124de/raw/4d84fac2f37bbd05f15c485dfcf80f88b071ab01/BJ1.txt',
  'BJ 4': 'https://gist.githubusercontent.com/BJ-WEB3/81e807fd255d53f2e9c1173ccbf95b27/raw/0bb6c7412da05526ebf567359c47210aa77d1e9e/BJ2.txt',
  'BJ 5': 'https://gist.githubusercontent.com/BJ-WEB3/c9c5c28339cba2b1996d29515626d21b/raw/1967ac79dc3e777cdc7b1095afcd4d1fcb6178d0/BJ3.txt',
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
