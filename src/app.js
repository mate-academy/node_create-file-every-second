'use strict';
/* eslint-disable no-console */

const fs = require('fs/promises');

setInterval(() => {
  const timestamp = new Date().toLocaleTimeString('en-GB');
  const [hour, min, sec] = timestamp.split(':');

  fs.writeFile(module.path + `/app-${hour}_${min}_${sec}.log`, timestamp)
    .then(() => console.log('\x1b[32m', timestamp))
    .catch(() => console.log('\x1b[31m', `File write error`));
}, 1000);
