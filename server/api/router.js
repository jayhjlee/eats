const router = require("express").Router();
const user = require("./user");
const places = require("./places");

router.use("/user", user);
router.use("/places", places);

module.exports = router;
