const User = require("./user");
const bcrypt = require("bcryptjs");

const salt = bcrypt.genSaltSync(10);

const seeds = () => {
	let users = [
		{
			username: "jdoe",
			password: "admin1234",
			firstName: "John",
			lastName: "Doe",
			email: "jdoe@gmail.com",
			location: "Secaucus",
		},
		{
			username: "ksmith",
			password: "ksmith1234!",
			firstName: "Kate",
			lastName: "Smith",
			email: "ksmith@gmail.com",
			location: "New York City",
		},
		{
			username: "mdavis",
			password: "mdavis111!",
			firstName: "Mark",
			lastName: "Davis",
			email: "mdavis@gmail.com",
			location: "San Francisco",
		},
	];

	users.map(user => {
		let hashedPassword = bcrypt.hashSync(user.password, salt);

		user.password = hashedPassword;
	});

	User.bulkCreate(users);
};

module.exports = seeds;
