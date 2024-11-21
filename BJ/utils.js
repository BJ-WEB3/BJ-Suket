require('colors');

const delay = async (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function displayHeader() {
    process.stdout.write('\x1Bc');
    console.log('██████        ██ '.green);
    console.log('██   ██       ██ '.green);
    console.log('██████        ██ '.green);
    console.log('██   ██  ██   ██ '.green);
    console.log('██████    █████ '.green);
    console.log();
  }

module.exports = { delay, displayHeader };
