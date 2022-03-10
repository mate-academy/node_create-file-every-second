'use strict';

const fs = require('fs');

const createNewFile = () => {
  const date = new Date();
  const name = 'app-'
  + date.getHours() + '_'
  + date.getMinutes() + '_'
  + date.getSeconds() + '.log';

  fs.writeFile(name, '', (err, data) => {
    if (err) {
      // eslint-disable-next-line no-console
      console.log(err);

      return;
    }

    // eslint-disable-next-line no-console
    console.log(name);
  });
};

setInterval(createNewFile, 1000);
