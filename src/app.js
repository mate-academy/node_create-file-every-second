'use strict';

const fs = require('fs/promises');

const date = new Date();
const hours = date.getHours();
const minutes = date.getMinutes();
const seconds = date.getSeconds();
const content = date.toDateString();

setInterval(async() => {
  try {
    await fs.writeFile(`app-${hours}_${minutes}_${seconds}.log`, content);
    // eslint-disable-next-line no-console
    console.log(content);
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log(e);
  }
}, 1000);
