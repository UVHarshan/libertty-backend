const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Creating a database schema
const customerSchema = new Schema({
  customerId: { type: Number, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
  homeAddress: { type: String, required: true },
}, {
  timestamps: true,
});

// Creating a model for Customers
const Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;