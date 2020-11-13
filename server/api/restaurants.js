const router = require("express").Router();
const axios = require("axios");
const secrets = require("../../secrets");

router.get("/restaurants", async (req, res) => {
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
