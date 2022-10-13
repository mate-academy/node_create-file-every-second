/* eslint-disable no-console */
'use strict';

const fs = require('fs');

const createFile = () => {
  const date = new Date();
  const seconds = date.getSeconds();
  const minutes = date.getMinutes();
  const hours = date.getHours();
  const formatName = `./app-${hours}_${minutes}_${seconds}.log`;
  const localeContent = date.toLocaleTimeString();

  fs.writeFile(formatName, localeContent, (error) => {
    if (error) {
      console.log('error');
    } else {
      console.log(localeContent);
    }
  });
};

const createFileEerySecond = () => {
  setInterval(() => createFile(), 100);
};

createFileEerySecond();
