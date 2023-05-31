/* eslint-disable no-console */
'use strict';

const fs = require('fs');

function createLogFile() {
  const currentDate = new Date();
  const hours = currentDate.getHours().toString().padStart(2, '0');
  const minutes = currentDate.getMinutes().toString().padStart(2, '0');
  const seconds = currentDate.getSeconds().toString().padStart(2, '0');
  const timestamp = `${hours}:${minutes}:${seconds}`;
  const filename = `app-${hours}_${minutes}_${seconds}.log`;
  const fileContent = timestamp;

  fs.writeFile(filename, fileContent, (error) => {
    if (error) {
      console.error(`Error creating file ${filename}: ${error}`);
    } else {
      console.log(`Created file: ${filename} (${timestamp})`);
    }
  });
}

setInterval(createLogFile, 1000);
