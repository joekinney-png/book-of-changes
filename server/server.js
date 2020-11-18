const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;

const apiRouter = require("./routes/api");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api", apiRouter);

app.use("/build", express.static(path.join(__dirname, "../build")));

app.get("/", (req, res) => {
  res.status(200).sendFile(path.join(__dirname, "../client/index.html"));
});

app.use((err, req, res, next) => {
  console.log(err.message);
  return res.redirect("/");
});

app.listen(PORT);

module.exports = app;
