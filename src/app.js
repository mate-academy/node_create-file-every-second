/* eslint-disable no-console */
'use strict';

const { writeFile } = require('fs');

setInterval(() => {
  const date = new Date();

  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const timeStamp = date.getTime();

  const fileName = `app-${hours}_${minutes}_${seconds}.log`;

  writeFile(fileName, String(timeStamp), err => {
    if (err) {
      console.log(err);
    } else {
      console.log(timeStamp, fileName);
    }
  });
}, 1000);
