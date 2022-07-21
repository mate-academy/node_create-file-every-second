/* eslint-disable no-console */
'use strict';

const fs = require('fs');

const createFile = () => {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const fileName = `app-${hours}_${minutes}_${seconds}`;

  fs.writeFile(`./src/${fileName}.log`, `${date}`, (err) => {
    if (err) {
      console.log(err);

      return;
    }

    console.log(`timestamp: ${date} \nfile name: ${fileName}\n`);
  });
};

setInterval(createFile, 1000);
