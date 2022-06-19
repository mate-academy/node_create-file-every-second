'use strict';

const fs = require('fs');

exports.creator = () => {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const fileName = `app-${hours}_${minutes}_${seconds}`;

  fs.writeFile(`./src/${fileName}.log`, `${date}`, (err, data) => {
    if (err) {
      // eslint-disable-next-line no-console
      console.log(err);
    }

    // eslint-disable-next-line no-console
    console.log(`${date} | ${fileName}`);
  });
};
