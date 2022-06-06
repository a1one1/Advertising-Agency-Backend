const mongoose = require('mongoose');

const claimSchema = mongoose.Schema({
  name: String,
  phone: Number,
});

const Claim = mongoose.model('Claim', claimSchema);

module.exports = Claim;
