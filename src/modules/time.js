"use strict";

const correction = (d) => {
  const dToStr = String(d);
  if (dToStr.length === 1) {
    return `0${d}`;
  }

  return dToStr;
};

const getTime = () => {
  const date = new Date();
  const hours = correction(date.getHours());
  const minutes = correction(date.getMinutes());
  const seconds = correction(date.getSeconds());

  const fileName = `app-${hours}_${minutes}_${seconds}.log`;

  const currentDate =
    date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
  const log = `${currentDate} - ${hours}:${minutes}:${seconds}`;

  return {
    fileName,
    log,
  };
};

module.exports = getTime;
