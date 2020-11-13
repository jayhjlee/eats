const router = require("express").Router();
const User = require("../db/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const DATE = Date.now();

router.get("/users", async (req, res) => {
	try {
		const users = await User.findAll();

		res.json(users);
	} catch (err) {
		res.json(err);
	}
});

router.post("/login", async (req, res) => {
	const { username, password } = req.body;

	try {
		const user = await User.findOne({
			where: {
				username,
			},
		});

		if (user) {
			const validPassword = bcrypt.compareSync(password, user.password);

			if (validPassword) {
				jwt.sign(
					{ password: user.password, iat: Math.floor(DATE) / 1000 },
					DATE.toString(),
					(err, token) => {
						if (err) {
							res.status(500).send({
								isLoggedin: false,
								msg: "Server error",
								error: err,
							});
						}

						res.status(200).send({
							username,
							isLoggedin: true,
							msg: "Successfully logged in",
							token,
							error: {},
						});
					}
				);
			} else {
				res.status(401).send({
					isLoggedin: false,
					msg: "Please enter valid password",
					error: {
						error: "Unauthorized access",
					},
				});
			}
		}
	} catch (err) {
		res.json(err);
	}
});

module.exports = router;
