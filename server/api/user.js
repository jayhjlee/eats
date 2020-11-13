const router = require("express").Router();
const axios = require("axios");
const User = require("../db/user");
const secrets = require("../../secrets");

router.get("/users", async (req, res) => {
	// const users = await User.findAll();

	// res.json(users);

	const response = await axios({
		method: "GET",
		url: "https://api.yelp.com/v3/businesses/search/phone?phone=+14157492060",
		headers: {
			Authorization: `Bearer ${apiKey}`,
		},
	});

	res.json(response.data);
});

module.exports = router;
