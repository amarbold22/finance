const { Router } = require("express");
const { updateUser } = require("../controller/userController");

const router = Router();

router.route("/:userId").put(updateUser);

module.exports = router;