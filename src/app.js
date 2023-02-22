/* eslint-disable no-console */
'use strict';

const fs = require('fs');
const path = require('path');

const formatTime = (time) => time.toString().padStart(2, 0);

const createFile = () => {
  const date = new Date();
  const hour = formatTime(date.getHours());
  const min = formatTime(date.getMinutes());
  const sec = formatTime(date.getSeconds());

  const fileName = `app-${hour}_${min}_${sec}.log`;
  const filePath = path.join(__dirname, fileName);
  const fileContent = `${hour}:${min}:${sec}`;

  fs.writeFile(filePath, fileContent, (error) => {
    if (error) {
      console.log(error);
    } else {
      console.log(`${fileName} file is created, time: ${fileContent}`);
    }
  });
};

setInterval(createFile, 1000);
