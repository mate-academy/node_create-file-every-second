/* eslint-disable no-console */
'use strict';

const fs = require('fs');

const func = () => {
  const date = new Date();

  const fileName
    = `app-${date.getHours()}_${date.getMinutes()}_${date.getSeconds()}.log`;

  const timestamp = date.toString();

  fs.writeFile(`./${fileName}`, timestamp, (err) => {
    if (!err) {
      console.log(`Name of the file is ${fileName}`);
      console.log(`Content of the file is ${timestamp}`);
    }
  });
};

setInterval(func, 1000);
