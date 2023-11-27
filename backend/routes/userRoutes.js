const { Router } = require("express");
const { signup } = require("../controller/userController");

const router = Router();

router.route("/signup").post(signup);

module.exports = router;