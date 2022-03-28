const mongoose = require('mongoose');

const stFormatSchema = mongoose.Schema({
  name: {
    type: String,
    default: 'Сити-Формат',
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

const StFormat = mongoose.model('StFormat', stFormatSchema);

module.exports = StFormat;
