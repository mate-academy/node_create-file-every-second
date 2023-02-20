/* eslint-disable no-console */
'use strict';

const fs = require('fs');

setInterval(() => {
  const time = new Date();
  let hours = time.getHours();
  let minutes = time.getMinutes();
  let seconds = time.getSeconds();

  if (hours < 10) {
    hours = `0${hours}`;
  }

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (seconds < 10) {
    seconds = `0${seconds}`;
  }

  const ts = `${hours}:${minutes}:${seconds}`;

  fs.writeFile(
    `./src/app-${hours}_${minutes}_${seconds}.log`, ts, (err) => {
      if (err) {
        console.log(err);

        return;
      }

      console.log(ts);
    }
  );
}, 1000);
