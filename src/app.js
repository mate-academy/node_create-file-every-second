/* eslint-disable no-console */
'use strict';

const fs = require('fs');

function infinityCreation() {
  const myDate = new Date();
  const currentTime = `${
    ('0' + myDate.getHours()).slice(-2)}_${
    ('0' + myDate.getMinutes()).slice(-2)}_${
    ('0' + myDate.getSeconds()).slice(-2)}`;

  const currentTimeForConsole = myDate.getTime();

  setTimeout(() => {
    fs.writeFile(`./src/app-${currentTime}.log`, String(currentTimeForConsole),
      (error) => {
        if (error) {
          throw new Error('ERROR');
        } else {
          console.log(currentTimeForConsole);
          console.log(`app-${currentTime}.log`);
        }
      });

    infinityCreation();
  }, 1000);
}

infinityCreation();
