const express = require("express");

const readingLogController = require("../controllers/readingLogController");

const router = express.Router();

router.post("/add", readingLogController.addReading, (req, res) => {
  res.redirect("/");
});

module.exports = router;
