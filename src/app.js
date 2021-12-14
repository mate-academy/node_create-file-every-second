'use strict';

const fs = require('fs');

let sec = 0;
let min = 0;
let hour = 0;

function createFile() {
  fs.writeFile(
    `./app-${hour}_${min}_${sec}.log`,
    `${hour}:${min}:${sec}`,
    (err) => {
      if (err) {
        // eslint-disable-next-line no-console
        console.log(err);
      }

      // eslint-disable-next-line no-console
      console.log(`${hour}:${min}:${sec}`);
    });
  sec++;

  if (sec >= 60) {
    sec = 0;
    min++;
  }

  if (min >= 60) {
    min = 0;
    hour++;
  }
}

setInterval(() => {
  createFile();
}, 1000);
