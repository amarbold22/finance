const { Router } = require("express");
const { transaction, transaction_get, transaction_put } = require("../controller/transactionController");

const router = Router();

router.route("/transaction").post(transaction);
router.route("/transaction").get(transaction_get);
router.route("/transaction/:user_id").put(transaction_put);

module.exports = router;