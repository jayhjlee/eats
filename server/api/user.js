const router = require("express").Router();
const axios = require("axios");
const User = require("../db/user");
const secrets = require("../../secrets");

router.get("/users", async (req, res) => {
	const users = await User.findAll();

	res.json(users);
});

module.exports = router;
