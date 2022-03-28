const mongoose = require('mongoose');

const billboardSchema = mongoose.Schema({
  name: {
    type: String,
    default: 'Билборд',
  },
  sideA: {
    reserved: {
      type: Boolean,
      default: false,
    },
    selected: {
      type: Boolean,
      default: false,
    },
  }, 
  sideB: {
    reserved: {
      type: Boolean,
      default: false,
    },
    selected: {
      type: Boolean,
      default: false,
    },
  }, 
  image: String,
  address: String,
  price: Number,
});

const Billboard = mongoose.model('Billboard', billboardSchema);

module.exports = Billboard;
