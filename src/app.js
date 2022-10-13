/* eslint-disable no-console */
'use strict';

const fs = require('fs/promises');
const path = require('path');

function getCurrentTime(separator = ':') {
  const fullCurrTime = new Date();

  function addLeadingZero(d) {
    return d < 10 ? '0' + d : d;
  }

  const hours = addLeadingZero(fullCurrTime.getHours());
  const minutes = addLeadingZero(fullCurrTime.getMinutes());
  const seconds = addLeadingZero(fullCurrTime.getSeconds());

  return `${hours}${separator}${minutes}${separator}${seconds}`
};

function createNewFile() {
  const appPath = process.argv[1];
  const pathObj = path.parse(appPath);

  const pathOfNewFile = `${pathObj.dir}\\app-${getCurrentTime('_')}.log`
  const currentTime = getCurrentTime();

  try {
    fs.writeFile(pathOfNewFile, currentTime);
    console.log(`${path.basename(pathOfNewFile)}`, currentTime);
  } catch (err) {
    console.log(err);
  }
};

const timerId = setInterval(() => createNewFile(), 1000);

setTimeout(() => clearInterval(timerId), 11000);
