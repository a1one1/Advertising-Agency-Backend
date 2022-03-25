const Cart = require('../models/Cart.model');
const Purchased = require('../models/Purchased.model');
const User = require('../models/User.model');

module.exports.purchasedsController = {
  getAllPurchaseds: async (req, res) => {
    try {
      const purchaseds = await Purchased.find();
      res.json(purchaseds);
    } catch (e) {
      res.status(401).json('Ошибка ' + e.toString());
    }
  },
  getIdPurchased: async (req, res) => {
    try {
      const purchased = await Purchased.findOne({ user: req.user.id });
      res.json(purchased);
    } catch (e) {
      res.status(401).json('Ошибка ' + e.toString());
    }
  },
  addItemsToPurchased: async (req, res) => {
    try {
      const client = await User.findOne({ _id: req.user.id });
      let cart = await Cart.findOne({user: req.user.id})
    //   const purchased = await Purchased.findOneAndUpdate(
    //     { user: req.user.id },
    //     {
    //       phone: client.phone,

    //     },
    //   );
    } catch (e) {
      res.status(401).json('Ошибка ' + e.toString());
    }
  },
};
