'use strict';

const fs = require('fs');

const createFile = () => {
  const time = new Date().toLocaleTimeString();
  const fileName = `app-${time.replaceAll(':', '_')}.log`;

  fs.writeFile(`./src/${fileName}`, time, (error) => {
    if (!error) {
      // eslint-disable-next-line no-console
      console.log(time, fileName);
    } else {
      // eslint-disable-next-line no-console
      console.log(error);
    }
  });
};

setInterval(createFile, 1000);
