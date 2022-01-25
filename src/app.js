/* eslint-disable no-console */
'use strict';

const fs = require('fs');
const interval = 1000;

const createDateFile = () => {
  const date = new Date();

  const timestamp = date.getHours()
    + '_' + date.getMinutes()
    + '_' + date.getSeconds();

  const fileName = `app-${timestamp}.log`;

  fs.writeFile(fileName, timestamp, (error) => {
    if (error) {
      console.log('Error! No file created.');
    } else {
      console.log(`Timestamp: ${timestamp}`);
      console.log(`New file is created: ${fileName}`);
    }
  });
};

setInterval(() => createDateFile(), interval);
