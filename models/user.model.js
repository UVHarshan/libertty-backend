const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String, required: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
  userType: { type: String, required: true },
}, {
  timestamps: true,
});

// Creating a model for users
const User = mongoose.model('User', userSchema);

module.exports = User;