const webpack = require("webpack");
const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const files = require("./webpack.entries");

const inProduction = process.env.NODE_ENV === "production";

module.exports = {
	mode: "development",
	context: path.join(__dirname, "./src"),
	entry: ["@babel/polyfill", "./index.js"],
	output: {
		path: path.join(__dirname, "/dist/static/js"),
		filename: "app.js",
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: "babel-loader",
			},
			{
				test: /\.s?css$/,
				use: ["style-loader", "css-loader"],
			},
		],
	},
	plugins: [new CleanWebpackPlugin()],
	watch: true,
	optimization: {
		minimize: inProduction,
	},
};

if (inProduction) {
	module.exports.mode = "production";
	module.exports.watch = false;
	module.exports.optimization.minimize = inProduction;
}
