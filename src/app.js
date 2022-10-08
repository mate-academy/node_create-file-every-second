'use strict';

const { writeFile } = require('fs');
// eslint-disable-next-line no-console
const log = console.log;

setInterval(() => {
  const time = new Date();
  const hours = String(time.getHours()).padStart(2, '0');
  const minutes = String(time.getMinutes()).padStart(2, '0');
  const seconds = String(time.getSeconds()).padStart(2, '0');
  const filename = `app-${hours}_${minutes}_${seconds}.log`;

  writeFile(filename, time.getTime().toString(), err => {
    if (err) {
      log('Error');
    } else {
      log(time.getTime());
    }
  });
}, 1000);
