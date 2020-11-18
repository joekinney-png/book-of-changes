const db = require("../models/readingModels");

const readingLogController = {};

readingLogController.addReading = (req, res, next) => {
  const { _id, firstName, lastName, question, starred, toss, notes } = req.body;
  const value = [
    _id,
    String(firstName),
    String(lastName),
    String(question),
    starred,
    toss,
    String(notes),
  ];

  res.locals.newReading = toss;

  const text = `INSERT INTO reading (_id, firstName, lastName, question, starred, toss, notes)
    VALUES ($1, $2, $3, $4, $5, $6, $7)`;

  db.query(text, value)
    .then((data) => {
      res.locals.addedReading = data.rows;
      next();
    })
    .catch((err) => console.log(err));
};

readingLogController.viewReadings = (req, res, next) => {
  const text = `SELECT * FROM reading`;

  db.query(text)
    .then((data) => {
      res.locals.readings = data.rows;
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
