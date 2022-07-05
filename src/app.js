'use strict';

const fs = require('fs');

setInterval(() => {
  const time = new Date();
  // eslint-disable-next-line
  const name = `app-${time.getHours()}_${time.getMinutes()}_${time.getSeconds()}.log`;
  const content = String(time.getTime());

  fs.writeFile(name, content, (err) => {
    if (err) {
      // eslint-disable-next-line
      console.log(err);

      return;
    }

    // eslint-disable-next-line
    console.log(`File with name ${name} and content ${content} was sucessfuly created`);
  });
}, 1000);
