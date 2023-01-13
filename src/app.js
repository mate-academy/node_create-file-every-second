/* eslint-disable no-console */
'use strict';

const fs = require('fs');

function createFile() {
  const time = new Date().toLocaleTimeString('en-GB');
  const fileName = `app-${time.replaceAll(':', '_')}.log`;

  fs.writeFile(`./src/${fileName}`, time, (error) => {
    if (!error) {
      console.log('timestamp: ', time, '; fileName: ', fileName);
    } else {
      console.log(error);
    }
  });
}

setInterval(createFile, 1000);
