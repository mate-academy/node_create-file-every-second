/* eslint-disable no-console */
'use strict';

const fs = require('fs');

const createFile = () => {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  fs.writeFile(`src/app-${hours}_${minutes}_${seconds}.log`,
    `${date}`,
    (error) => {
      if (error) {
        console.log(error);
      } else {
        console.log(`Created file name:
      app-${hours}_${minutes}_${seconds}.log\n
      File content: ${date}`);
      }
    });
};

setInterval(createFile, 1000);
