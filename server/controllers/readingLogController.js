const db = require("../models/readingModels");

const readingLogController = {};

readingLogController.viewReadings = (req, res, next) => {
  const text = `SELECT * FROM reading`;

  db.query(text)
    .then((data) => {
      // sort readings by reading id when they are pulled
      data.rows.sort((a, b) => a["_id"] - b["_id"]);
      res.locals.readings = data.rows;
      next();
    })
    .catch((err) => console.log(err));
};

readingLogController.pullId = (req, res, next) => {
  let idArr = [];
  const idPull = `SELECT _id FROM reading`;

  db.query(idPull)
    .then((data) => {
      for (let i = 0; i < data.rows.length; i++) {
        idArr.push(data.rows[i]["_id"]);
      }
      if (Math.max(...idArr) + 1 > 0) {
        res.locals.id = Math.max(...idArr) + 1;
      } else {
        res.locals.id = 1;
      }
      next();
    })
    .catch((err) => console.log(err));
};

readingLogController.addReading = (req, res, next) => {
  const changingLineComb =
    res.locals.changingLineText.text.reduce(
      (acc, curr) => (acc += curr + "\n"),
      ""
    ) || "There are no changing lines";

  const { firstName, lastName, question } = res.locals.body;
  const thoughts = "[to come]";
  const value = [
    res.locals.id,
    String(firstName),
    String(lastName),
    String(question),
    String(res.locals.presentHexObj.definition),
    String(res.locals.presentHexObj.hexagram),
    String(res.locals.presentHexObj.description),
    String(res.locals.futureHexObj.definition),
    String(res.locals.futureHexObj.hexagram),
    String(res.locals.futureHexObj.description),
    String(changingLineComb),
    String(thoughts),
  ];

  res.locals.newReading = value;

  const text = `INSERT INTO reading (_id, firstName, lastName, question, presentHexDef, presentHex, presentHexDescrip, futureHexDef, futureHex, futureHexDescrip, changingLines, thoughts)
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)`;

  db.query(text, value)
    .then((data) => {
      res.locals.addedReading = data.rows;
      next();
    })
    .catch((err) => console.log(err));
};

readingLogController.deleteReading = (req, res, next) => {
  const id = req.query.id;
  const text = `DELETE FROM reading WHERE _id=${id}`;

  db.query(text)
    .then((data) => {
      res.locals.deletedReading = data.rows;
      next();
    })
    .catch((err) => console.log(err));
};

module.exports = readingLogController;
