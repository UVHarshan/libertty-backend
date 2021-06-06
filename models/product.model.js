const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Creating a database schema
const productSchema = new Schema({
  brand: { type: String, required: true },
  item: { type: String, required: true },
  category: { type: String, required: true },
  price: { type: String, required: true },
  quantity: { type: Number, required: true },
}, {
  timestamps: true,
});

// Creating a model for Products
const Product = mongoose.model('Product', productSchema);

module.exports = Product;