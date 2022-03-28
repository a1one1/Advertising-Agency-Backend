const Cart = require('../models/Cart.model');
const Order = require('../models/Order.model');
const User = require('../models/User.model');

module.exports.ordersController = {
  getAllOrders: async (req, res) => {
    try {
      const orders = await Order.find();
      res.json(orders);
    } catch (e) {
      res.status(401).json('Ошибка ' + e.toString());
    }
  },
  getOrderById: async (req, res) => {
    try {
      const order = await Order.findOne({ user: req.user.id });
      res.json(order);
    } catch (e) {
      res.status(401).json('Ошибка ' + e.toString());
    }
  },
  addItemsToOrder: async (req, res) => {
    try {
      const client = await User.findOne({ _id: req.user.id });
      const cart = await Cart.findOne({ user: req.user.id });
      const order = await Order.findOne({ user: req.user.id });
      await order.update({
        phoneClient: client.phone,
        buy: {
          ...order.buy,
          rents: [...order.buy.rents, ...cart.product.rents],
          sales: [...order.buy.sales, ...cart.product.sales],
        },
      });
      await cart.update({
        product: {
          rents: [],
          sales: [],
        },
        total: 0,
      });
      res.json(order);
    } catch (e) {
      res.status(401).json('Ошибка ' + e.toString());
    }
  },
};
