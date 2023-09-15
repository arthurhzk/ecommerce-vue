const router = require("express").Router();

const itemController = require("../controllers/itemController");
router.route("/items").post((req, res) => itemController.create(req, res));

router.route("/items").get((req, res) => itemController.getAll(req, res));
router.route("/items/:id").get((req, res) => itemController.get(req, res));
router
  .route("/items/:id")
  .delete((req, res) => itemController.delete(req, res));
router.route("/items/:id").put((req, res) => itemController.update(req, res));
module.exports = router;
