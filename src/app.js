'use strict';
/* eslint-disable no-console */

const fs = require('fs');

setInterval(() => {
  const hours = new Date().getHours();
  const minutes = new Date().getMinutes();
  const seconds = new Date().getSeconds();

  fs.writeFile(
    `./src/app-${hours}_${minutes}_${seconds}.log`,
    `Created at: ${hours}:${minutes}:${seconds} (GMT+3)`,
    (err, data) => {
      if (err) {
        console.log(`Error: ${err}`);
      }
    }
  );

  // eslint-disable-next-line max-len
  console.log(`Created at: ${hours}:${minutes}:${seconds} File: app-${hours}_${minutes}_${seconds}.log`);
}, 1000);
