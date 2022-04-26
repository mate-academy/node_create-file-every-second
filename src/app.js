'use strict';
const fs = require('fs');

setInterval(() => {
  let date = new Date;
  let time = `${date.getHours()}_${date.getMinutes()}_${date.getSeconds()}`;

  fs.writeFile(`app-${time}.log`,
    time, (err, data) => {
      if (err) {
      console.log(err);
      } else {
        console.log(`${date.getHours()}_${date.getMinutes()}_${date.getSeconds()} ${`app-${time}.log`}`);
      }
    });
}, 1000);
