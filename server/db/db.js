const Sequelize = require("sequelize");

const DB_PORT = 5432;

const db = new Sequelize("postgresql://eats-admin:eats1234!@db:5432/eats", {
	logging: false,
	pool: {
		max: 9,
		min: 0,
		idle: 10000,
	},
});

db.authenticate()
	.then(() => {
		console.log(`Database connection established at port ${DB_PORT}`);
	})
	.catch(() => console.error(err.message));

module.exports = db;
