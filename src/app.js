/* eslint-disable no-console */
'use strict';

const fs = require('fs');

const createFile = () => {
  const currentDate = new Date();
  const timestamp = currentDate.getTime() + '';

  const fileName
    = `./src/app-${currentDate.getHours()}_`
    + `${currentDate.getMinutes()}_${currentDate.getSeconds()}.log`;

  fs.writeFile(fileName, timestamp, (err) => {
    if (!err) {
      console.log(
        'timestamp: ',
        timestamp,
        'fileName: ',
        fileName,
      );
    } else {
      console.log(err);
    }
  });
};

setInterval(() => createFile(), 1000);
