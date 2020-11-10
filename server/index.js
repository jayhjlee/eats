const express = require("express");
const path = require("path");
const router = require("./api/router");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "../dist/static")));

app.use("/api", router);

app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "../dist/index.html"));
});

module.exports = app;
