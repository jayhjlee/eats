const app = require("./server/");
const { db } = require("./server/db");
const seeds = require("./server/db/seed");

const PORT = 8080;

db.drop().then(() => {
	console.log("All tables dropped");

	db.sync({ alter: true }).then(() => {
		seeds();

		app.listen(PORT, () => {
			console.log(`Server is running on port ${PORT}`);
		});
	});
});
