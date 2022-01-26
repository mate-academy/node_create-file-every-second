"use strict";
const interval = 1000;
const fs = require('fs');


const fileCreator = () => {
  try {
    const date = new Date();
    const timestamp = `${date.getHours}_${date.getMinutes}_${date.getSeconds}`;
    fs.writeFile(`app-${timestamp}.log`, timestamp, (err) => {
      if (err) throw err;
      console.log('The file has been saved!');
    });
  } catch (error) {
    console.log(error)
  }
};

setInterval(fileCreator, interval);
