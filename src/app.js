'use strict';

const readline = require('readline');
const { creator } = require('./creator');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Create files? (Yes or No): ', (userInput) => {
  if (userInput === 'Yes' || userInput === 'yes') {
    setInterval(() => {
      creator();
    }, 1000);
  } else {
    rl.close();
  }
});
