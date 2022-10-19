'use strict';
/* eslint-disable no-console */

const fs = require('fs');

function creatingFiles() {
  setInterval(creatorFiles, 1000);
}

function getRightFormat(time) {
  let rightFormat;

  if (time < 10) {
    rightFormat = `0${time}`;
  } else {
    rightFormat = `${time}`;
  }

  return rightFormat;
};

function creatorFiles() {
  const cTime = new Date();
  const h = getRightFormat(cTime.getHours());
  const m = getRightFormat(cTime.getMinutes());
  const s = getRightFormat(cTime.getSeconds());
  const rightF = `${h}:${m}:${s}`;

  fs.writeFile(`app-${h}_${m}_${s}.log`, `${rightF}`, (err, data) => {
    if (err) {
      console.log(err);

      return;
    }
    console.log(rightF, `app-${h}_${m}_${s}.log`);
  });
}

creatingFiles();
