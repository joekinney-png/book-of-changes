const express = require("express");

const readingLogController = require("../controllers/readingLogController");
const hexagramController = require("../controllers/hexagramController");

const router = express.Router();

router.get("/view", readingLogController.viewReadings, (req, res) => {
  res.status(200).json(res.locals.readings);
});

router.post("/add",
  hexagramController.newPresentHexagram,
  readingLogController.pullId,
  readingLogController.addReading,
  (req, res) => {
    res.redirect("/");
});

router.get("/delete?:id", readingLogController.deleteReading, (req, res) => {
  console.log('router working')
  res.status(200).json(res.locals.deletedReading);
});

module.exports = router;
