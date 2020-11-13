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

// User Login
router.post("/login", async (req, res) => {
	const { username, password } = req.body;

	try {
		const user = await User.findOne({
			where: {
				username,
			},
			attributes: ["username", "isActive", "password"],
			raw: true,
		});

		// User found.
		if (user) {
			if (user.username) {
				if (user.isActive) {
					const validPassword = bcrypt.compareSync(password, user.password);

					// Check password
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
					// User is inactive.
				} else {
					res.status(401).send({
						isLoggedin: false,
						msg: "You are deactivated. Please contact customer support",
						error: {
							error: "401 Unauthorized access",
						},
					});
				}
			}

			// User is not found.
		} else {
			res.status(404).send({
				isLoggedin: false,
				msg: "Please enter correct username",
				error: {
					error: "User not found",
				},
			});
		}
	} catch (err) {
		res.status(500).send({
			isLoggedin: false,
			msg: "Server error",
			error: err,
		});
	}
});

// User Sign-up
router.post("/signup", async (req, res) => {
	const { username, password, email } = req.body;

	try {
		const existingUser = await User.findOne({
			where: { username },
			attributes: ["username"],
			raw: true,
		});

		const existingEmail = await User.findOne({
			where: { email },
			attributes: ["email"],
			raw: true,
		});

		if (existingUser || existingEmail) {
			if (existingUser) {
				if (username === existingUser.username) {
					res.status(400).send({
						isSuccess: false,
						msg: "Username already exists. Try different one.",
						error: {
							msg: "400 Bad Request",
						},
					});
				}
			} else if (existingEmail) {
				res.status(400).send({
					isSuccess: false,
					msg: "Email already exists. Please verify your email.",
					error: {
						msg: "400 Bad Request",
					},
				});
			}
		} else {
			const salt = bcrypt.genSaltSync(10);
			const hashedPassword = bcrypt.hashSync(password, salt);

			req.body.isActive = true;
			req.body.password = hashedPassword;

			const response = await User.create(req.body);

			if (response.data) {
				res.status(200).send({
					isSuccess: true,
					msg: "Welcome to Eats!",
					error: {},
				});
			}
		}
	} catch (error) {
		res.status(500).send({
			isLoggedin: false,
			msg: "Server error",
			error: error,
		});
	}
});

module.exports = router;
