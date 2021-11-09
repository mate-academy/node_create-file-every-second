/* eslint-disable no-console */
'use strict';

const fs = require('fs/promises');
const { exit } = require('process');

const TIME_INTERVAL = 1000;

setInterval(() => {
  const currentDate = new Date();
  // eslint-disable-next-line max-len
  const currentTime = `${currentDate.getHours()}_${currentDate.getMinutes()}_${currentDate.getSeconds()}`;
  const newFileName = `app-${currentTime}`;

  fs.writeFile(`./src/${newFileName}.txt`, `${currentDate}`)
    .then(() => {
      console.log(`
        =========================================
        new file name   : ${newFileName}
        new file content: ${currentDate}
      `);
    })
    .catch((error) => {
      console.log(error);
      exit();
    });
}, TIME_INTERVAL);
