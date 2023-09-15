const ItemModel = require("../models/Item");

const itemController = {
  create: async (req, res) => {
    try {
      const item = {
        title: req.body.title,
        price: req.body.price,
        image: req.body.image,
        description: req.body.description,
        rating: req.body.rating,
        quantity: req.body.quantity,
      };

      const response = await ItemModel.create(item);

      res.status(201).json(response);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    }
  },
  getAll: async (req, res) => {
    try {
      const items = await ItemModel.find();
      res.json(items);
    } catch (error) {
      console.log(error);
    }
  },
  get: async (req, res) => {
    try {
      const id = req.params.id;
      const item = await ItemModel.findById(id);
      if (!item) {
        res.status(404).json({ msg: "Serviço não encontrado." });
        return;
      }
      res.json(item);
    } catch (error) {
      console.log(error);
    }
  },
  delete: async (req, res) => {
    try {
      const id = req.params.id;
      const item = await ItemModel.findById(id);
      if (!item) {
        res.status(404).json({ msg: "Serviço não encontrado." });
        return;
      }
      const deletedItem = await ItemModel.findByIdAndDelete(id);
      res
        .status(200)
        .json({ deletedItem, msg: "Serviço excluído com sucesso" });
    } catch (error) {
      console.log(error);
    }
  },
  update: async (req, res) => {
    const id = req.params.id;
    const item = {
      title: req.body.title,
      price: req.body.price,
      image: req.body.image,
      description: req.body.description,
      rating: req.body.rating,
      quantity: req.body.quantity,
    };
    const updatedItem = await ItemModel.findByIdAndUpdate(id, item);
    if (!updatedItem) {
      res.status(404).json({ msg: "Serviço não encontrado." });
      return;
    }
    res.status(200).json({ item, msg: "Serviço atualizado com sucesso." });
  },
};

module.exports = itemController;
