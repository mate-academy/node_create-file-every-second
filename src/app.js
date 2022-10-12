'use strict';

const fs = require('fs');

function clock() {
  const data = new Date();
  const hours = new Date().getHours();
  const minutes = new Date().getMinutes();
  const seconds = new Date().getSeconds();

  // eslint-disable-next-line max-len
  fs.appendFile(`./app-${hours}_${minutes}_${seconds}.log`, `${data}`, (err) => {
    if (err) {
      // eslint-disable-next-line no-console
      console.log(err);

      return;
    }

    const plusZero = seconds < 10 ? `0${seconds}` : seconds;

    // eslint-disable-next-line no-console,max-len
    console.log(`Complete create a new file at ${hours}:${minutes}:${plusZero}`);
  });

  setTimeout(clock, 1000);
}

setTimeout(clock, 1000);
