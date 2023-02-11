'use strict';

const fs = require('fs/promises');
const colors = require('colors');
const moment = require('moment');

colors.enable();

// eslint-disable-next-line space-before-function-paren
const createFile = async (fileName, content) => {
  try {
    const file = await fs.appendFile(fileName, content);

    // eslint-disable-next-line no-console
    console.log(fileName.replace(/.\/src\//, '') + ' - ' + content);

    return file;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error.red);
  }
};

setInterval(() => {
  const now = moment().format('HH_mm_ss');
  const content = moment().format();

  createFile(`./src/app-${now}.log`, content);
}, 1000);
