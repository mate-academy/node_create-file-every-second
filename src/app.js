/* eslint-disable no-console */
"use strict";

const getTime = require("./modules/time");
const fs = require("fs");

setInterval(() => {
  const data = getTime();

  fs.writeFile(`./${data.fileName}`, data.log, (error) => {
    console.log(error);
  });
}, 1000);
