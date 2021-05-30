const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const cashierSchema = new Schema({
  cashierId: { type: Number, required: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
}, {
  timestamps: true,
});

// Creating a model for Cashiers
const Cashier = mongoose.model('Cashier', cashierSchema);

module.exports = Cashier;