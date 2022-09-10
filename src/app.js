/* eslint-disable no-console */
'use strict';

const fs = require('fs');

const func = () => {
  const date = new Date();
  const name = `./src/app-${date.getHours()}
    -${date.getMinutes()}-${date.getSeconds()}.log`;

  fs.writeFile(name, `${date.getTime()}`, (err) => {
    if (!err) {
      console.log(`Filename: ${name} \nContent: ${date.getTime()}`);
    } else {
      console.log(err);
    }
  });
};

setInterval(() => {
  func();
}, 1000);
