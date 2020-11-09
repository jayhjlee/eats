const router = require("express").Router();

router.get("/users", async (req, res) => {
	console.log("view user list");
});

module.exports = router;
