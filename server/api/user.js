const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const axios = require("axios");
const interface = require("os").networkInterfaces();

const User = require("../db/user");
const secrets = require("../../secrets");

const DATE = Date.now();

router.get("/users", async (req, res) => {
	try {
		const users = await User.findAll();

		res.json(users);
	} catch (err) {
		res.json(err);
	}
});

// Get user's location (coordinates).
router.get("/user-location", async (req, res) => {
	try {
		const { geolocationAPIKey } = secrets;
		const ip = interface.lo[0].address;

		const response = await axios.get(
			`http://api.ipstack.com/check?access_key=${geolocationAPIKey}`
		);

		const { data } = response;
		const { latitude, longitude } = data;

		const lat = parseFloat(latitude.toFixed(4));
		const lng = parseFloat(longitude.toFixed(4));

		res.json({ lat, lng });
	} catch (err) {
		console.error(err);
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
			attributes: ["username", "isActive", "password", "location"],
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
										isLoggedIn: false,
										msg: "Server error",
										error: err,
									});
								}

								res.status(200).json({
									user,
									isLoggedIn: true,
									msg: "Successfully logged in",
									token,
									error: {},
								});
							}
						);
					} else {
						res.status(401).send({
							isLoggedIn: false,
							msg: "Please enter valid password",
							error: {
								error: "Unauthorized access",
							},
						});
					}
					// User is inactive.
				} else {
					res.status(401).send({
						isLoggedIn: false,
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
				isLoggedIn: false,
				msg: "Please enter correct username / password",
				error: {
					error: "User not found",
				},
			});
		}
	} catch (err) {
		res.status(500).send({
			isLoggedIn: false,
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

			const newUser = await User.create(req.body);

			if (newUser) {
				res.status(200).send({
					isSuccess: true,
					msg: "Welcome to Eats!",
					error: {},
				});
			}
		}
	} catch (error) {
		res.status(500).send({
			isLoggedIn: false,
			msg: "Server error",
			error: error,
		});
	}
});

module.exports = router;
