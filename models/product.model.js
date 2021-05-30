const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Creating a database schema
const productSchema = new Schema({
  productId: { type: Number, required: true },
  categoryId: { type: Number, required: true },
  brand: { type: String, required: true },
  item: { type: String, required: true },
  quantity: { type: Number, required: true },
  expiryDate: { type: Date, required: true },
  price: { type: String, required: true },
}, {
  timestamps: true,
});

// Creating a model for Products
const Product = mongoose.model('Product', productSchema);

module.exports = Product;