/* eslint-disable no-console */
'use strict';

const fs = require('fs');
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

function logger(startDate) {
  const time = new Date();
  const logName = time
    .toUTCString().split(' ')[4]
    .replace(/:/g, '_');

  const durationMs = Date.now() - startDate;

  fs.writeFile(`./app-${logName}.log`, `${durationMs}`, () => {
    console.log(`${durationMs}, file created with name: app-${logName}.log`);
  });

  setTimeout(() => {
    logger(startDate);
  }, 1000);
}

function createLog() {
  const startDate = Date.now();
  const quitFromLogging = () => {
    readline.question('Type "q" if you want to stop logging', (input) => {
      if (input === 'q') {
        process.exit();
      } else {
        console.log('Unknown command, if you want to exit type "q"');
        quitFromLogging();
      }
    });
  }

  quitFromLogging();
  logger(startDate);
};

createLog();
