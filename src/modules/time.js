"use strict";

const correction = (d) => String(d).padStart(2, "0");

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
