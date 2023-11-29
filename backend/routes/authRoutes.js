const { Router } = require("express");
const { signup, signin } = require("../controller/authController");

const router = Router();
// /api/auth/signup
router.route("/signup").post(signup);
router.route("/signin").post(signin);

module.exports = router;