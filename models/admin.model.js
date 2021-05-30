const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const adminSchema = new Schema({
  adminId: { type: Number, required: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
}, {
  timestamps: true,
});

// Creating a model for Admins
const Admin = mongoose.model('Admin', adminSchema);

module.exports = Admin;