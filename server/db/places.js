const db = require("./db");
const { DataTypes } = require("sequelize");

const Place = db.define("place", {
	name: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	address1: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	address2: {
		type: DataTypes.STRING,
	},
	city: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	state: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	postalCode: {
		type: DataTypes.INTEGER,
		allowNull: false,
	},
	country: {
		type: DataTypes.STRING,
	},
	phone: {
		type: DataTypes.STRING,
		allowNull: false,
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
