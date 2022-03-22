const mongoose = require('mongoose');

const billboardSchema = mongoose.Schema({
  sideA: {
    type: Boolean,
    default: true,
  },
  sideB: {
    type: Boolean,
    default: true,
  },
  image: String,
  address: String,
  price: Number,
});

const Billboard = mongoose.model('Billboard', billboardSchema);

module.exports = Billboard;
