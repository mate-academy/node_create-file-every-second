'use strict';

const fs = require('fs');
const TIME_INTERVAL = 1000;

(function createFileEverySecond() {
  setInterval(() => {
    const date = new Date();
    // eslint-disable-next-line max-len
    const currentTime = `${date.getHours()}_${date.getMinutes()}_${date.getSeconds()}.log`;
    const fileName = `app-${currentTime}`;

    fs.writeFile(`./src/logs/${fileName}.log`, Date(), (error, data) => {
      if (error) {
        throw error;
      } // если возникла ошибка

      // eslint-disable-next-line no-console
      console.log(`Timestamp: ${currentTime}`);
      // eslint-disable-next-line no-console
      console.log(`File ${fileName} created`);
    });
  }, TIME_INTERVAL);
})();
