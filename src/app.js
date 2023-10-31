'use strict';

const fs = require('fs');

setInterval(() => {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  const fileName = `app-${hours}_${minutes}_${seconds}.log`;

  fs.writeFile(`./${fileName}`, date.toString(), (err, data) => {
    if (err) {
      console.log(err);
    }
  });
}, 1000);
