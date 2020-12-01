const router = require("express").Router();
const Place = require("../db/places");

router.post("/addPlace", async (req, res) => {
	try {
		const newPlace = await Place.create(req.body);

		if (newPlace) {
			res.status(201).send({
				isSuccess: true,
				msg: "Place added",
				status: 201,
				error: {},
			});
		}
	} catch (err) {
		res.status(500).send({
			isSuccess: true,
			msg: err.message,
			error: err,
		});
	}
});

module.exports = router;
