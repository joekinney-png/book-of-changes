const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

const apiRouter = require("./routes/api");

app.use("/api", apiRouter);

app.use("/build", express.static(path.join(__dirname, "../build")));

app.get("/", (req, res) => {
  res.status(200).sendFile(path.join(__dirname, "../client/index.html"));
});

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));

module.exports = app;
