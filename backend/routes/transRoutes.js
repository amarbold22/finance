const { Router } = require("express");
const { transaction, transaction_get, transaction_put, transaction_delete, transaction_param } = require("../controller/transactionController");

const router = Router();

router.route("/transaction").post(transaction);
router.route("/transaction").get(transaction_get);
router.route("/transaction/:user_id").put(transaction_put);
router.route("/transaction/:user_id").delete(transaction_delete);
router.route("/transaction").get(transaction_param);

module.exports = router;