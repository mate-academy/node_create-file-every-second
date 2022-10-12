'use strict';

const fs = require('fs');
const readline = require('readline');

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function createFileEverySecond() {
  setInterval(() => {
    const date = new Date().toLocaleTimeString().split(':');
    const name = `./src/app-${date[0]}_${date[1]}_${date[2]}.log`;

    fs.writeFile(name, new Date().toLocaleTimeString(), (error) => {
      if (error) {
        terminal.write('Error');
      }
    });

    terminal.write(`${new Date().toLocaleTimeString()} ${name}\n`);
  }, 1000);
}

createFileEverySecond();
