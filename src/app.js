'use strict';

const fs = require('fs');

setInterval(() => {
  const date = new Date();
  const currentTime
    = `app-${date.getHours()}_${date.getMinutes()}_${date.getSeconds()}.log`;

  fs.appendFile(`./${currentTime}.txt`, `${date.toString()}`, (error) => {
    if (error) {

      // eslint-disable-next-line
      console.log('Something is wrong', error);
      process.exit();
    }

    // eslint-disable-next-line
    console.log(`
    Timestamp = ${date.toDateString()}
    Name = ${currentTime}
    `);
  });
}, 1000);
