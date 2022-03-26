const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
  phoneClient: {
    type: Number,
  },
  buy: {
    sales: [],
    rents: [],
  },
  user: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'User',
  },
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
