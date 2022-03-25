const mongoose = require('mongoose');

const purchasedSchema = mongoose.Schema({
  phoneClient: {
    type: Number,
    required: true,
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

const Purchased = mongoose.model('Purchased', purchasedSchema);

module.exports = Purchased;
