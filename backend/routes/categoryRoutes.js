const { Router } = require("express");
const { getAllCategory } = require("../controller/categoryController");

const router = Router();

router.route("/").get(getAllCategory);

module.exports = router;