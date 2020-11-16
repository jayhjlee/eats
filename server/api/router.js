const router = require("express").Router();
const user = require("./user");
const restaurants = require("./restaurants");

router.use("/user", user);
router.use("/restaurant", restaurants);

module.exports = router;
