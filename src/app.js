'use strict';
import fs from "fs";

const createFile = () => {
  const time = new Date().toLocaleTimeString()
  const fileName = `app-${time.replaceAll(':', '_')}.log`

  fs.writeFile(`./src/${fileName}`, time, (error) => {
    if (!error) {
      console.log(time, fileName)
    } else {
      console.log(error)
    }
  });
}

setInterval(createFile, 1000);
