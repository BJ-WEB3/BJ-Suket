require('colors');

const delay = async (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function displayHeader() {
    process.stdout.write('\x1Bc');
    console.log('██████        ██ '.magenta);
    console.log('██   ██       ██ '.magenta);
    console.log('██████        ██ '.magenta);
    console.log('██   ██  ██   ██ '.magenta);
    console.log('██████    █████ '.magenta);
    console.log();
  }

module.exports = { delay, displayHeader };
