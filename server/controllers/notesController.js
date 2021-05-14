const db = require("../models/readingModels");

const notesController = {};

// notesController.getNote = (req, res, next) => {
//   const id = Object.keys(req.query)[0];

//   const text = `SELECT thoughts FROM reading WHERE _id=${id}`;

//   db.query(text)
//     .then((data) => {
//       console.log(data.rows[0]["thoughts"]);
//       res.locals.oldThoughts = data.rows[0]["thoughts"];
//     })
//     .catch((err) => console.log(err));

//   next();
// };

notesController.updateNote = (req, res, next) => {
  const id = Object.keys(req.query)[0];
  const newThoughts = Object.values(req.query)[0];

  res.locals.newThoughts = newThoughts;

  const text = `UPDATE reading SET thoughts='${newThoughts}' WHERE _id=${id}`;

  db.query(text)
    .then((data) => {
      res.locals.newThoughts = data.rows;
      console.log(res.locals.oldThoughts);
      next();
    })
    .catch((err) => console.log(err));

  next();
};

module.exports = notesController;
