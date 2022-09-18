'use strict';
/* eslint-disable no-console */

const fs = require('fs');

function padTo2Digits(num) {
  return String(num).padStart(2, '0');
}

setInterval(() => {
  const date = new Date();

  const fileName = `app-${padTo2Digits(date.getHours())}_`
    + padTo2Digits(date.getMinutes())
    + `_${padTo2Digits(date.getSeconds())}`;

  fs.writeFile(`./src/${fileName}.log`, new Date().toString(), (error) => {
    if (error) {
      throw new Error(error.message);
    }

    console.log('Created: ', new Date().toString());
    console.log('File name: ', fileName);
  });
}, 1000);
