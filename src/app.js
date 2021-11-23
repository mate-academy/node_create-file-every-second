'use strict';

import fs from 'fs';

function createFile() {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  const fileName = `app-${hours}_${minutes}_${seconds}.log`;

  fs.writeFile(fileName, String(date), (err, data) => {
    if (err) {
      throw err;
    }

    console.log("Success at " + date);
  });
}

setInterval(createFile, 1000);
