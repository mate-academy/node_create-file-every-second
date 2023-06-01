/* eslint-disable no-console */
'use strict';

const fs = require('fs');

const stringConverter = (data) => {
  return data.toString().padStart(2, '0');
};

function createLogFile() {
  const currentDate = new Date();
  const hours = stringConverter(currentDate.getHours());
  const minutes = stringConverter(currentDate.getMinutes());
  const seconds = stringConverter(currentDate.getSeconds());
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
