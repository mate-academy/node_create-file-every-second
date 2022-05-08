/* eslint-disable no-console */
'use strict';

const fs = require('fs/promises');

setInterval(async() => {
  const date = new Date();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();
  const content = date.toString();

  try {
    await fs.writeFile(`app-${hour}-${minute}-${second}.log`, content);
    console.log(content);
  } catch (error) {
    console.log('Error');
  }
}, 1000);
