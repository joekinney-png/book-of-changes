const db = require("../models/readingModels");

const readingLogController = {};

readingLogController.viewReadings = (req, res, next) => {
  const text = `SELECT * FROM reading`;

  db.query(text)
    .then((data) => {
      res.locals.readings = data.rows;
      console.log(data.rows)
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
        idArr.push(data.rows[i]['_id']);
      }
      if (Math.max(...idArr) + 1 > 0) {
        res.locals.id = Math.max(...idArr) + 1;
      } else {
        res.locals.id = 1;
      };
      next();
    })
    .catch((err) => console.log(err));
}

readingLogController.addReading = (req, res, next) => {
  console.log(res.locals.presentHexArr);
  console.log(res.locals.presentHexStr);

  const { firstName, lastName, question } = req.body;
  const value = [
    res.locals.id,
    String(firstName),
    String(lastName),
    String(question),
    String(res.locals.presentHexStr),
    String(res.locals.futureHexStr),
    String(res.locals.changingLinesStr),
  ];

  res.locals.newReading = value;

  const text = `INSERT INTO reading (_id, firstName, lastName, question, presentHexStr, futureHexStr, changingLines)
    VALUES ($1, $2, $3, $4, $5, $6, $7)`;

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
