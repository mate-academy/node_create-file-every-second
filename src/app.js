/* eslint-disable no-console */
'use strict';

const fs = require('fs');

setInterval(() => {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const fileName = `app-${hours}_${minutes}_${seconds}.txt`;

  fs.writeFile(`./src/${fileName}`, date.toString(), (err) => {
    if (err) {
      return;
    }

    console.log(`In ${date} was created ${fileName}`);
  });
}, 1000);
