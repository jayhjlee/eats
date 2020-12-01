const router = require("express").Router();
const axios = require("axios");
const secrets = require("../../secrets");

router.post("/addPlace", async (req, res) => {
	console.log(req.body);
});

module.exports = router;
