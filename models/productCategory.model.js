const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Defining the schema
const prodCategorySchema = new Schema({
  categoryId: { type: Number, required: true },
  name: { type: String, required: true },
}, {
  timestamps: true,
});

// Creating a model for Admins
const ProdCategory = mongoose.model('ProdCategory', prodCategorySchema);

module.exports = ProdCategory;