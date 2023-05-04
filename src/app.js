'use strict';

const fs = require('fs');

function logCurrentTime() {
  const currentTime = new Date().toLocaleTimeString();
  const hours = currentTime.slice(0, 2);
  const minutes = currentTime.slice(3, 5);
  const sec = currentTime.slice(6, 8);

  fs.writeFileSync(`app-${hours}_${minutes}_${sec}.log`, currentTime);
  // eslint-disable-next-line no-console
  console.log(`app-${hours}_${minutes}_${sec}.log`);
}

setInterval(logCurrentTime, 1000);
