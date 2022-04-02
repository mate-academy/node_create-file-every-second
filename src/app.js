/* eslint-disable no-console */
'use strict';

const fs = require('fs');

setInterval(() => {
  const date = new Date();
  const fileName
    = `app-${date.getHours()}_${date.getMinutes()}_${date.getSeconds()}.log`;

  createLogFile(fileName, date.toTimeString());
}, 1000);

function createLogFile(name, content) {
  fs.writeFile(name, content, error => {
    if (error) {
      return;
    }

    console.log(name, content);
  });
}
