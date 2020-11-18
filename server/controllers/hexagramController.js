const db = require("../models/readingModels");
const hexagramInfo = require("../../client/information/hexagrams.json");
const changingLineInfo = require("../../client/information/changing-lines.json");

const hexagramController = {};

hexagramController.newPresentHexagram = (req, res, next) => {
  const presentHexArr = [];
  const futureHexArr = [];
  let changingLines = [0, 0, 0, 0, 0, 0];

  for (let i = 0; i < 6; i ++) {
    presentHexArr.push(Math.floor((Math.random() * 4)) + 6);
    if (presentHexArr[i] === 6) {
      futureHexArr.push(9);
      changingLines[i] = 1;
    } else if (presentHexArr[i] === 9) {
      futureHexArr.push(6);
      changingLines[i] = 1;
    } else {
      futureHexArr.push(presentHexArr[i]);
    }
  }

  const presentHexBin = presentHexArr.map((e) => (e = e % 2));
  const futureHexBin = futureHexArr.map((e) => (e = e % 2));

  const presentHexObj = hexagramInfo[0][presentHexBin.join("")];
  const futureHexObj = hexagramInfo[0][futureHexBin.join("")];

  let queryStart = presentHexObj.number.toString();
  queryStart += "_";
  const changingLineText = { text: [] };

  changingLines.filter((e, i) => {
    if (e === 1) {
      const queryIndex = i + 1;
      const query = queryStart + queryIndex;
      const input = queryIndex + '. ' + changingLineInfo[0][query];
      changingLineText.text.push(input);
    }
  })

  res.locals.body = req.body;
  res.locals.presentHexObj = presentHexObj;
  res.locals.changingLineText = changingLineText;
  res.locals.futureHexObj = futureHexObj;

  next();
}

module.exports = hexagramController;
