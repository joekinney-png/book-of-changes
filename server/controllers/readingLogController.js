const db = require("../models/readingModels");

const readingLogController = {};

readingLogController.pullId = (req, res, next) => {
  let idArr = [];
  const idPull = `SELECT _id FROM reading`;

  db.query(idPull)
    .then((data) => {
      for (let i = 0; i < data.rows.length; i++) {
        idArr.push(data.rows[i]['_id']);
      }
      res.locals.id = Math.max(...idArr) + 1;
      next();
    })
    .catch((err) => console.log(err));
}

readingLogController.addReading = (req, res, next) => {
  const { firstName, lastName, question } = req.body;
  const value = [
    res.locals.id,
    String(firstName),
    String(lastName),
    String(question),
  ];

  res.locals.newReading = value;

  const text = `INSERT INTO reading (_id, firstName, lastName, question)
    VALUES ($1, $2, $3, $4)`;

  db.query(text, value)
    .then((data) => {
      res.locals.addedReading = data.rows;
      next();
    })
    .catch((err) => console.log(err));
};

readingLogController.viewReadings = (req, res, next) => {
  const text = `SELECT * FROM reading`;

  console.log('view readings invoked');

  db.query(text)
    .then((data) => {
      res.locals.readings = data.rows;
      console.log(data.rows)
      next();
    })
    .catch((err) => console.log(err));
};

readingLogController.deleteReading = (req, res, next) => {
  const id = req.query.id;
  const text = `DELETE FROM reading WHERE _id=${id}`;

  console.log('delete readings invoked');

  db.query(text)
    .then((data) => {
      res.locals.deletedReading = data.rows;
      next();
    })
    .catch((err) => console.log(err));
};

module.exports = readingLogController;
