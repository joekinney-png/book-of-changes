const db = require("../models/readingModels");

const hexagramController = {};

hexagramController.newPresentHexagram = (req, res, next) => {
  const presentHexArr = [];
  const futureHexArr = [];
  const changingLines = [0, 0, 0, 0, 0, 0];

  for (let i = 0; i < 6; i ++) {
    presentHexArr.push(Math.floor((Math.random() * 4)) + 6);
    if (presentHexArr[i] === 6) {
      futureHexArr.push(8);
      changingLines[i] = 1;
    } else if (presentHexArr[i] === 9) {
      futureHexArr.push(7);
      changingLines[i] = 1;
    } else {
      futureHexArr.push(presentHexArr[i]);
    }
  }

  const presentHexStr = presentHexArr.join('');
  const futureHexStr = futureHexArr.join('');
  const changingLinesStr = changingLines.join('');

  res.locals.presentHexArr = presentHexArr;
  res.locals.presentHexStr = presentHexStr;
  res.locals.futureHexArr = futureHexArr;
  res.locals.futureHexStr = futureHexStr;
  res.locals.changingLines = changingLines;
  res.locals.changingLinesStr = changingLinesStr;

  next();
}

module.exports = hexagramController;
