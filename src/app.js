import fs from 'fs/promises';

function getTimestamp(separator) {
  const date = new Date();

  return `${date.getHours()}${separator}`
  + `${date.getMinutes()}${separator}`
  + `${date.getSeconds()}`;
}

const fileCreator = setInterval(async() => {
  try {
    const fileContent = new Date().toTimeString();

    await fs.writeFile(`./app-${getTimestamp('_')}.txt`, fileContent);
    console.log(getTimestamp('-'));
  } catch (error) {
    console.log(error);
    clearInterval(fileCreator);
  }
}, 1000);
