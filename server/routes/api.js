const express = require("express");

const readingLogController = require("../controllers/readingLogController");
const hexagramController = require("../controllers/hexagramController");
const notesController = require("../controllers/notesController");

const router = express.Router();

router.get("/view", readingLogController.viewReadings, (req, res) => {
  res.status(200).json(res.locals.readings);
});

router.post(
  "/add",
  hexagramController.newPresentHexagram,
  readingLogController.pullId,
  readingLogController.addReading,
  (req, res) => {
    res.redirect("/");
  }
);

router.get(
  "/put",
  // notesController.getNote,
  notesController.updateNote,
  (req, res) => {
    res.redirect("/");
  }
);

router.get("/delete?:id", readingLogController.deleteReading, (req, res) => {
  res.status(200).json(res.locals.deletedReading);
});

module.exports = router;
