const { Router } = require("express");
const { transaction, transaction_get, transaction_put, transaction_delete, transaction_param, getAllTransaction, getBarGraphData, createTransaction, getTotalIncomeExpense, getChartData } = require("../controller/transactionController");

const router = Router();

router.route("/").post(transaction);
router.route("/").get(transaction_get);
router.route("/:user_id").put(transaction_put);
router.route("/:user_id").delete(transaction_delete);
router.route("/").get(transaction_param);
router.route("/chartdata/:userId").get(getChartData);
router.route("/total").get(getTotalIncomeExpense);
router.route("/:userId").get(getAllTransaction);
router.route("/").post(createTransaction);

module.exports = router;