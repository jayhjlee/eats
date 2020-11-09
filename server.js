const app = require("./server/");
const { db } = require("./server/db");

const PORT = 8080;

db.sync({ alter: true }).then(() => {
	app.listen(PORT, () => {
		console.log(`Server is running on port ${PORT}`);
	});
});
