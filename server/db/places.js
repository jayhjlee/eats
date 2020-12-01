const db = require("./db");
const { DataTypes } = require("sequelize");

const Place = db.define("place", {
	name: {
		type: DataTypes.STRING,
	},
	address1: {
		type: DataTypes.STRING,
	},
	address2: {
		type: DataTypes.STRING,
	},
	city: {
		type: DataTypes.STRING,
	},
	state: {
		type: DataTypes.STRING,
	},
	postalCode: {
		type: DataTypes.INTEGER,
	},
	country: {
		type: DataTypes.STRING,
	},
	phone: {
		type: DataTypes.STRING,
	},
	type: {
		type: DataTypes.STRING,
	},
	price: {
		type: DataTypes.STRING,
	},
	latitude: {
		type: DataTypes.FLOAT,
	},
	longitude: {
		type: DataTypes.FLOAT,
	},
	createdAt: {
		type: DataTypes.DATE,
		allowNull: false,
		defaultValue: Date.now(),
	},
	modifiedAt: {
		type: DataTypes.DATE,
	},
});

module.exports = Place;
