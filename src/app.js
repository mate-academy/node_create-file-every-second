/* eslint-disable max-len */
/* eslint-disable no-console */
'use strict';

const fs = require('fs');

const makeFileEverySecond = () => {
  const date = new Date();
  const seconds = date.getSeconds();
  const minutes = date.getMinutes();
  const hours = date.getHours();

  fs.writeFile(`${hours}_${minutes}_${seconds}`, `${date.toLocaleTimeString()}`, () => {
    console.log(date.toLocaleTimeString());
  });
};

setInterval(() => {
  makeFileEverySecond();
}, 1000);
