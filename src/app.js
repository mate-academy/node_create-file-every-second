/* eslint-disable no-console */
'use strict';

const fs = require('fs');

setInterval(() => {
  const date = new Date();
  const fileName
    = `app-${date.getHours()}_${date.getMinutes()}_${date.getSeconds()}.log`;

  fs.writeFile(`./src/${fileName}`, date.toString(), (err) => {
    if (err) {
      throw new Error(err);
    }

    console.log(`Succes, timestamp: ${date}, filename: ${fileName}`);
  });
}, 1000);
