/* eslint-disable no-console */
'use strict';

const fs = require('fs');

setInterval(() => {
  const timestamp = new Date();
  const hours = timestamp.getHours();
  const minutes = timestamp.getMinutes();
  const seconds = timestamp.getSeconds();
  const fileName = `src/app-${hours}_${minutes}_${seconds}.log`;

  fs.writeFile(
    fileName,
    timestamp.toDateString(),
    (error) => {
      if (error) {
        console.log(error);

        return;
      }

      console.log(
        `Time of creation: ${timestamp.toDateString()}, file name: ${fileName}`
      );
    }
  );
}, 1000);
