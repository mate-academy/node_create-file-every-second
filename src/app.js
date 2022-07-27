'use strict';

const fs = require('fs');

async function log() {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  fs.writeFile(`./src/app-${hours}_${minutes}_${seconds}.log`,
    date + '',
    (err) => {
      if (!err) {
        // eslint-disable-next-line no-console
        console.log('Success');
      } else {
        // eslint-disable-next-line no-console
        console.log('Failed');
      }
    });
}

setInterval(log, 1000);
