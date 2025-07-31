const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Item name is required'],
    minlength: [2, 'Item name must be at least 2 characters long'],
    trim: true
  },
  category: {
    type: String,
    trim: true
  },
  quantity: {
    type: Number,
    required: [true, 'Quantity is required'],
    min: [0, 'Quantity cannot be negative'],
    validate: {
      validator: Number.isInteger,
      message: 'Quantity must be an integer'
    }
  },
  price: {
    type: Number,
    min: [0, 'Price cannot be negative']
  },
  description: {
    type: String,
    maxlength: [500, 'Description can be up to 500 characters long'],
    trim: true
  },
  dateAdded: {
    type: Date,
    default: Date.now
  },
  inStock: {
    type: Boolean,
    default: true
  }
});

module.exports = mongoose.model('Item', itemSchema);
