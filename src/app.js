/* eslint-disable no-console */
'use strict';

const fs = require('fs');

const writeFile = () => {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const fileName = `app-${hours}_${minutes}_${seconds}`;

  fs.writeFile(`src/${fileName}.log`, `${Date.now()}`, (err) => {
    if (err) {
      console.log(err.message);
      process.kill(0);
    }
    console.log(date, '\n', fileName);
  });
};

setInterval(writeFile, 1000);
