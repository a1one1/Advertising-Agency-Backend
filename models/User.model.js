const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  login: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
