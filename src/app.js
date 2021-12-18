'use strict';

const fs = require('fs');

(function createFileEverySecond() {
  setInterval(() => {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    const fileName = `app-${hours}_${minutes}_${seconds}.log`;
    fs.writeFile(`app-${fileName}.log`, Date(), (err, data) => {
      if (err) {
        throw err;
      }
       // eslint-disable-next-line no-console
      console.log(`File ${fileName} created`);
    });
  }, 1000);
})()
