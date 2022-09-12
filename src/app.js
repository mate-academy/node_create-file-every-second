'use strict';

const fs = require('fs');

const intervalId = setInterval(() => {
  const date = new Date();
  const seconds = date.getSeconds();
  const minutes = date.getMinutes();
  const hours = date.getHours();
  const timestamp = String(date.getTime());
  const fileName = `./app-${hours}_${minutes}_${seconds}.log`;

  fs.writeFile(
    fileName,
    timestamp,
    (err) => {
      if (err) {
        clearInterval(intervalId);
        console.log('Error! Aborting.');

        return;
      }

      console.log(`${timestamp}: Created file name: ${fileName}`);
    },
  );
}, 1000);
