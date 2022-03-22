const Cart = require('../models/Cart.model');

module.exports.cartsController = {
  getAllCarts: async (req, res) => {
    try {
      const carts = await Cart.find();
      res.json(carts);
    } catch (e) {
      res.status(401).json('Ошибка ' + e.toString());
    }
  },
  getIdCart: async (req, res) => {
    try {
      const cart = await Cart.findOne({ user: req.params.userId });
      res.json(cart);
    } catch (e) {
      res.status(401).json('Ошибка ' + e.toString());
    }
  },
  addCartProduct: async (req, res) => {
    try {
      const cart = await Cart.findOne({ user: req.params.userId });
      await cart.update({
        $push: { product: req.body.product },
      });
    } catch (e) {
      res.status(401).json('Ошибка ' + e.toString());
    }
  },
};
