const fs = require('fs');
const rl = require('readline-sync');
const rn = require('random-number');
const coin = require('./coin');

const logFileName = process.argv[2] || 'logs.json';

fs.appendFile(`./${logFileName}`, '', (err) => {
  if (err) {
    console.log(err);
  }
});

console.log(`Log file: ${logFileName}\nLet's start!\n`);

const fileLogger = require('pino')(`./${logFileName}`);

const generateSide = rn.generator({
  integer: true,
});

const randomSideOfCoin = () => coin[generateSide()];

let isRepeat = true;

const game = () => {
  const playerSide = rl.question(
    'Choose a coin side ("heads/tails" or "exit" to close app): '
  );
  const coinSide = randomSideOfCoin();
  const printResults = (result) => {
    console.log(`Side of the coin...: ${coinSide}\n${result}\n`);
  };

  switch (playerSide) {
    case coinSide:
      printResults('You win!');
      fileLogger.info('win');
      break;
    case 'exit':
      console.log('Game over!');
      isRepeat = false;
      break;
    default:
      printResults('You loose!');
      fileLogger.info('loose');
  }
};

while (isRepeat) {
  game();
}
