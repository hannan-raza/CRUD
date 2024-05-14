const itemService = require("../services/itemServices");

const createItem = (req, res) => {
  const { name } = req.body;
  const newItem = itemService.createItem(name);
  res.status(201).json(newItem);
};

const getAllItems = (req, res) => {
  const items = itemService.getAllItems();
  res.json(items);
};

const getItemById = (req, res) => {
  const itemId = parseInt(req.params.id, 10);
  const item = itemService.getItemById(itemId);
  if (item) {
    res.json(item);
  } else {
    res.status(404).send("Item Not found");
  }
};

const updateItem = (req, res) => {
  const itemId = parseInt(req.params.id, 10);
  const { name } = req.body;
  const updatedItem = itemService.updateItem(itemId, name);
  if (updatedItem) {
    res.json(updatedItem);
  } else {
    res.status(404).send("Item Not found");
  }
};

const deleteItem = (req, res) => {
  const itemId = parseInt(req.params.id, 10);
  const success = itemService.deleteItem(itemId);
  if (success) {
    res.status(204).send();
  } else {
    res.status(404).send("Item Not found");
  }
};

module.exports = {
  createItem,
  getAllItems,
  getItemById,
  updateItem,
  deleteItem,
};
