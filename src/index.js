const readlineSync = require('readline-sync');
const games = require('./games');

const playGame = (game) => {
  const name = readlineSync.question('May I have your name? ');
  game(name);
};

const main = () => {
  console.log('Welcome to the Brain Games!');
  const game = games[process.argv[2]];
  if (!game) {
    console.log('Unknown game');
    return;
  }
  playGame(game);
};

main();