const router = require("express").Router();
const axios = require("axios");
const secrets = require("../../secrets");

router.get("/restaurants/location", async (req, res) => {
	try {
		const { apiKey } = secrets;
		const { city, limit } = req.query;

		let numOfRestaurants = limit;

		if (!numOfRestaurants) {
			numOfRestaurants = 20;
		}
		const response = await axios.get(
			`https://api.yelp.com/v3/businesses/search?location=${city}&limit=${numOfRestaurants}`,
			{
				headers: {
					Authorization: `Bearer ${apiKey}`,
				},
			}
		);
		res.json(response.data);
	} catch (err) {
		res.json(err);
	}
});

router.get("/restaurants/phone", async (req, res) => {
	const { apiKey } = secrets;

	const { phoneNumber } = req.query;

	try {
		const response = await axios.get(
			`https://api.yelp.com/v3/businesses/search/phone?phone=+1${phoneNumber}`,
			{
				headers: {
					Authorization: `Bearer ${apiKey}`,
				},
			}
		);

		res.json(response.data);
	} catch (err) {
		res.json(err);
	}
});

module.exports = router;
