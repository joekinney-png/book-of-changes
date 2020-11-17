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

  console.log(value);

  const addReadQuery = `INSERT INTO reading (_id, firstName, lastName, question, starred, toss, notes)
    VALUES ($1, $2, $3, $4, $5, $6, $7)`;

  console.log(addReadQuery);

  db.query(addReadQuery, value)
    .then((data) => {
    console.log(data);
    return next();
    })
    .catch((err) => {
    console.log(err);
    return next(err);
    });
};

module.exports = readingLogController;
