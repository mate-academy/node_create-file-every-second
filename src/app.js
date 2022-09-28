/* eslint-disable no-console */
'use strict';

const fs = require('fs');

setInterval(() => {
  const timestamp = new Date().toLocaleTimeString();
  const hours = timestamp.split(':')[0];
  const minutes = timestamp.split(':')[1];
  const seconds = timestamp.split(':')[2];

  console.log(timestamp);

  fs.writeFile(`./src/app-${hours}_${minutes}_${seconds}.log`,
    timestamp,
    er => {
      if (er) {
        console.log('Error', er.code);
      }
    });
}, 1000);
