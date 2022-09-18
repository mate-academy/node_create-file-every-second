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

  const fileContent = date.toString();

  fs.writeFile(`./src/${fileName}.log`, fileContent, (error) => {
    if (error) {
      throw new Error(error.message);
    }

    console.log('Created: ', date.toString());
    console.log('File name: ', fileContent);
  });
}, 1000);
