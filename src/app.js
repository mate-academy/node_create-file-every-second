import fs from 'fs';

const createFile = () => {
  const timeStamp = new Date().toString().slice(0, 24);
  const time = timeStamp.slice(16);
  const fileName = `app-${time.replace(/:/g, '_')}.log`;
  const path = `./src/${fileName}`;

  fs.writeFile(path, timeStamp, () => {
    if (fs.existsSync(path)) {
      console.log(timeStamp, fileName);
    }
  });
};

setInterval(createFile, 1000);
