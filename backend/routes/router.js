const router = require("express").Router();

const itemsRouter = require("./items");

router.use("/", itemsRouter);

module.exports = router;
