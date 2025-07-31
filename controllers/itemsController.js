const Item = require('../models/item');

// Helper function to validate item input
function validateItemInput(data) {
  const { name, price } = data;
  if (!name || typeof name !== 'string') return 'Name is required and must be a string';
  if (price == null || typeof price !== 'number') return 'Price is required and must be a number';
  return null;
}

// GET all
exports.getAllItems = async (req, res) => {
  try {
    const items = await Item.find();
    res.status(200).json(items);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// GET one by ID
exports.getItemById = async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);
    if (!item) return res.status(404).json({ error: 'Item not found' });
    res.status(200).json(item);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// POST create
exports.createItem = async (req, res) => {
  try {
    const error = validateItemInput(req.body);
    if (error) return res.status(400).json({ error });

    const item = new Item(req.body);
    await item.save();
    res.status(201).json(item);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// PUT update
exports.updateItem = async (req, res) => {
  try {
    const error = validateItemInput(req.body);
    if (error) return res.status(400).json({ error });

    const item = await Item.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!item) return res.status(404).json({ error: 'Item not found' });
    res.status(200).json(item);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// DELETE
exports.deleteItem = async (req, res) => {
  try {
    const item = await Item.findByIdAndDelete(req.params.id);
    if (!item) return res.status(404).json({ error: 'Item not found' });
    res.status(200).json({ message: 'Item deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
