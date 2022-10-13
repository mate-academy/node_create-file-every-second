/* eslint-disable no-console */
'use strict';

const fs = require('fs');

function infinityCreation() {
  const myDate = new Date();
  const currentTime = `${
    ('0' + myDate.getHours()).slice(-2)}_${
    ('0' + myDate.getMinutes()).slice(-2)}_${
    ('0' + myDate.getSeconds()).slice(-2)}`;

  const currentTimeForConsole = `${
    ('0' + myDate.getHours()).slice(-2)}:${
    ('0' + myDate.getMinutes()).slice(-2)}:${
    ('0' + myDate.getSeconds()).slice(-2)}`;

  setTimeout(() => {
    fs.writeFile(`./src/app-${currentTime}.log`, myDate.toString('utf8'),
      (error) => {
        if (error) {
          throw new Error('ERROR');
        } else {
          console.log(currentTimeForConsole);
          console.log(myDate.toString('utf8'));
        }
      });

    infinityCreation();
  }, 1000);
}

infinityCreation();
