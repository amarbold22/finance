const { Router } = require("express");
const { addCat } = require("../controller/recordController");

const router = Router();
// /api/records/signup

router.route("/addCat").post(addCat);

module.exports = router;