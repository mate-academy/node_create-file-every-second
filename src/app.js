'use strict';

const fs = require('fs');
const path = require('path');

const createFile = () => {
  const date = new Date();
  const hours = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours();
  const minutes = date.getMinutes() < 10
    ? `0${date.getMinutes()}`
    : date.getMinutes();
  const seconds = date.getSeconds() < 10
    ? `0${date.getSeconds()}`
    : date.getSeconds();
    
  const fileName = `app-${hours}_${minutes}_${seconds}.log`;
  const time = `${hours}:${minutes}:${seconds}`;
  const filePath = path.join(__dirname, fileName);
  const fileContent = date.toString();


  fs.writeFile(filePath, fileContent, (error) => {
    if (!error) {
      console.log(`File ${fileName} created at ${time}`);
    } else {
      console.log(error);
    }
  });
};


setInterval(createFile, 1000);
