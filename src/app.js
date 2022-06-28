/* eslint-disable no-console */
'use strict';

const fs = require('fs/promises');

setInterval(writeFile, 1000);

// eslint-disable-next-line no-unused-vars
async function writeFile() {
  try {
    const timeStamp = new Date();
    const hours = timeStamp.getHours();
    const minutes = timeStamp.getMinutes();
    const seconds = timeStamp.getSeconds();

    const newFileName = `./app-${hours}_${minutes}_${seconds}.log`;

    await fs.writeFile(newFileName, '');

    console.log(timeStamp);
    console.log(newFileName);
  } catch (err) {
    console.log('Error');
  }
}
