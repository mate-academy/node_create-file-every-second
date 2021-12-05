import fs from 'fs';

createFileEverySecond();

function createFileEverySecond() {
  setInterval(() => {
    const clock = Date().split(' ')[4];
    const fileName = Date().split(' ')[4].split(':').join('_');

    fs.writeFile(`app-${fileName}.log`, Date(), (err, data) => {
      if (err) {
        // eslint-disable-next-line no-console
        console.log(err + 'err');

        return;
      }

      // eslint-disable-next-line no-console
      console.log(`File ${clock} created`);
    });
  }, 1000);
}
