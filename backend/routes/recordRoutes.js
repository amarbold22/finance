const { Router } = require("express");
const { addCat, getCat } = require("../controller/recordController");

const router = Router();
// /api/records/signup

router.route("/").post(addCat);
router.route("/").get(getCat);

module.exports = router;