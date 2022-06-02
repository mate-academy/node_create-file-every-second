'use strict';

const fs = require('fs');

setInterval(() => {
  const hours = new Date().getHours();
  const minutes = new Date().getMinutes();
  const seconds = new Date().getSeconds();

  fs.writeFile(
    `src/app-<${hours}>_<${minutes}>_<${seconds}>.log`,
    `${hours}_${minutes}_${seconds}`,
    (err, data) => {
      if (err) {
        return err;
      }
    }
  );
}, 1000);
