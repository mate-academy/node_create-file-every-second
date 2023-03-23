/* eslint-disable no-console */
'use strict';

const fs = require('fs');

function createFile() {
  const now = new Date();
  const filename = `app-${now.getHours().toString().padStart(2, '0')}_${now
    .getMinutes()
    .toString()
    .padStart(2, '0')}_${now.getSeconds().toString().padStart(2, '0')}.log`;
  const content = now.toISOString();

  fs.writeFile(filename, content, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log(`File created: ${filename}`);
    }
  });
}

setInterval(createFile, 1000);
