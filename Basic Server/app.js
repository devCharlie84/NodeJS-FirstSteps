const express = require("express");
const bodyParser = require("body-parser");
const createError = require("http-errors");

const api = express.Router();
const app = express();

function getName(req, res) {
  const name = req.params.name;
  res.status(200).send({ hello: name });
  // res.json({ hello: name });
}

api.get("/hello/:name", getName);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/", api);

app.use(function (req, res, next) {
  next(createError(404));
});

app.use(function (err, req, res, next) {
  const status = err.status || 500;
  res.status(status);
  res.json({
    status,
    message: err.message,
  });
});

module.exports = app;
