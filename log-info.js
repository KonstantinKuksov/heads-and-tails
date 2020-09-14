const fs = require('fs');
const findMaxMutch = require('./find-max-mutch');

const logFileName = process.argv[2] || 'logs.json';

const arr = fs
  .readFileSync(`./${logFileName}`, 'utf-8')
  .split('\n')
  .slice(0, -1)
  .map((item) => JSON.parse(item))
  .map((item) => item.msg);

const totalGames = arr.length;
const totalWins = arr.filter((item) => item === 'win').length;
const totalLooses = arr.filter((item) => item === 'loose').length;
const percentageOfWins =
  Math.round(((100 * totalWins) / totalGames) * 100) / 100;

console.log(`Total number of games: ${totalGames}`);
console.log(`Total wins: ${totalWins}`);
console.log(`Total looses: ${totalLooses}`);
console.log(`Percentage of wins: ${percentageOfWins}%`);
console.log(`Maximum number of wins in a row: ${findMaxMutch(arr, 'win')}`);
console.log(`Maximum number of looses in a row: ${findMaxMutch(arr, 'loose')}`);
