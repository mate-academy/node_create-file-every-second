/* eslint-disable no-console */
'use strict';

const fs = require('fs');

const getCorrectDate = () => {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const correctHours = hours < 10
    ? `0${hours}`
    : hours;
  const correctMinutes = minutes < 10
    ? `0${minutes}`
    : minutes;
  const correctSeconds = seconds < 10
    ? `0${seconds}`
    : seconds;
  const timeStamp = date.toTimeString().split(' ')[0];

  return {
    correctHours,
    correctMinutes,
    correctSeconds,
    timeStamp,
  };
};

const createFile = () => {
  const {
    correctHours,
    correctMinutes,
    correctSeconds,
    timeStamp,
  } = getCorrectDate();

  const fileName = `${__dirname}/app-${correctHours}_${correctMinutes}\
_${correctSeconds}.log`;

  fs.writeFile(fileName, timeStamp, (err) => {
    if (err) {
      console.log('Error');
    }

    console.log(timeStamp);
    console.log(`${fileName} is created succesfully`);
  });
};

setInterval(() => {
  createFile();
}, 1000);
