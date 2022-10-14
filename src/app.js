/* eslint-disable no-console */
'use strict';

const fs = require('fs');

setInterval(() => {
  const date = new Date();
  const hours = timeTransform(date.getHours());
  const minutes = timeTransform(date.getMinutes());
  const seconds = timeTransform(date.getSeconds());
  const timeStamp = String(date.getTime());
  const newFile = `./app-${hours}:${minutes}:${seconds}.log`;

  fs.writeFile(newFile, timeStamp, (err) => {
    if (err) {
      throw new Error('something going wrong');
    } else {
      console.log(timeStamp, newFile);
    }
  });
}, 1000);

function timeTransform(num) {
  return num < 10
    ? '0' + num
    : num;
}
