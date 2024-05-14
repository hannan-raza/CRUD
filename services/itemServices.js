let items = [];
let nextId = 1;

const createItem = (name) => {
  const newItem = { id: nextId++, name };
  items.push(newItem);
  return newItem;
};

const getAllItems = () => {
  return items;
};

const getItemById = (id) => {
  const item = items.find((item) => item.id === id);
  return item;
};

const updateItem = (id, name) => {
  const item = items.find((item) => item.id === id);
  if (item) {
    item.name = name;
    return item;
  }
  return null;
};

const deleteItem = (id) => {
  const index = items.findIndex((item) => item.id === id);
  if (index !== -1) {
    items.splice(index, 1);
    return true;
  }
  return false;
};

module.exports = {
  createItem,
  getAllItems,
  getItemById,
  updateItem,
  deleteItem,
};
