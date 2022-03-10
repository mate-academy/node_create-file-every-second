'use strict';

const fs = require('fs');

function createDateFile() {
  const date = new Date();
  const hours = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();
  const content = date.toLocaleString();
  const fileName = `app-${hours}_${minute}_${second}.log`;

  fs.writeFile(`src/${fileName}`, content, (err) => {
    if (err) {
      throw err;
    }
    // eslint-disable-next-line no-console
    console.log(`
      File: ${fileName} was creates at: ${date.toLocaleTimeString()}
    `);
  });
};

setInterval(() => {
  createDateFile();
}, 1000);
