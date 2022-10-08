/* eslint-disable no-console */
'use strict';

const fs = require('fs');

const timer = () => {
  setInterval(() => {
    const date = new Date();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const seconds = date.getSeconds();
    const fileName = `app-${hour}_${minute}_${seconds}.log`;
    const timeStamp = `timeStamp-${hour}-${minute}-${seconds}`;

    fs.writeFile(fileName, timeStamp, (err) => {
      if (err) {
        throw new Error(err);
      } else {
        console.log(fileName, timeStamp);
      }
    });
  }, 1000);
};

timer();

// node ./src/app.js
