/* eslint-disable no-console */
'use strict';

const fs = require('fs/promises');

const formateLine = (time) => {
  return time < 10 ? `0${time}` : time;
};

setInterval(() => {
  const date = new Date();
  const seconds = formateLine(date.getSeconds());
  const minutes = formateLine(date.getMinutes());
  const hours = formateLine(date.getHours());

  const fileName = `app-${hours}_${minutes}_${seconds}.log`;
  const time = `${hours}:${minutes}:${seconds}`;

  fs.writeFile(`./src/${fileName}`, time)
    .then(() => console.log(time, fileName))
    .catch(err => console.log(err));
}, 1000);
