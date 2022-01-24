import fs from 'fs/promises';

function getTimestamp(separator) {
  const date = new Date();

  return `${date.getHours()}${separator}`
  + `${date.getMinutes()}${separator}`
  + `${date.getSeconds()}`;
}

const fileCreator = setInterval(() => {
  try {
    fs.writeFile(`./app-${getTimestamp('_')}.txt`, new Date().toTimeString());
    console.log(getTimestamp('-'));
  } catch (error) {
    console.log(error);
    clearInterval(fileCreator);
  }
}, 1000);
