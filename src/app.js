'use strict';
/* eslint-disable no-console */

const fs = require('fs/promises');

setInterval(() => {
  const date = new Date();
  const timestamp = date.getTime();
  const [hours, minutes, seconds] = date.toLocaleTimeString().split(':');
  const fileName = `/app-${hours}_${minutes}_${seconds}.log`;

  fs.writeFile((module.path + fileName), String(timestamp))
    .then(() => console.log(fileName, timestamp))
    .catch((error) => console.error(error));
}, 1000);
