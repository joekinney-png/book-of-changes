const db = require("../models/readingModels");

const notesController = {};

notesController.updateNote = (req, res, next) => {
  const id = Object.keys(req.query)[0];
  const newThoughts = Object.values(req.query)[0];

  res.locals.newThoughts = newThoughts;

  const text = `UPDATE reading SET thoughts='${newThoughts}' WHERE _id=${id}`;

  db.query(text)
    .then((data) => {
      res.locals.newThoughts = data.rows;
      next();
    })
    .catch((err) => console.log(err));

  next();
}

module.exports = notesController;
