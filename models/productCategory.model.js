const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Defining the schema
const prodCategorySchema = new Schema({
  category: { type: String, required: true }
}, {
  timestamps: true,
});

// Creating a model for Categories
const ProdCategory = mongoose.model('ProdCategory', prodCategorySchema);

module.exports = ProdCategory;