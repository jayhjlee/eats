const Sequelize = require("sequelize");

const db = new Sequelize("postgresql://eats-admin:eats1234!@db:5432/eats", {
	logging: false,
	pool: {
		max: 9,
		min: 0,
		idle: 10000,
	},
});

module.exports = db;
