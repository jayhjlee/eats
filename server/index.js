const express = require("express");
const path = require("path");
const router = require("./api/router");

const app = express();

app.use(express.static(path.resolve(__dirname, "../dist/static")));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", router);

module.exports = app;
