const Billboard = require('../models/Billboard.model');
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
      const cart = await Cart.findOne({ user: req.user.id });
      res.json(cart);
    } catch (e) {
      res.status(401).json('Ошибка ' + e.toString());
    }
  },
  addCartRents: async (req, res) => {
    try {
      const billboard = await Billboard.findById(req.params.billboardId)
      
      let ress = billboard
      ress.sideA = req.body.sideA
      ress.sideB = req.body.sideB
      console.log(ress)
      
      const cart = await Cart.findOne({ user: req.user.id });
      await cart.update({
        product: {
          ...cart.product,
          rents: [...cart.product.rents, ress],
        },
      });
      const responce = await Cart.findOne({ user: req.user.id });
      res.json(responce);
    } catch (e) {
      res.status(401).json('Ошибка ' + e.toString());
    }
  },
  addCartSales: async (req, res) => {
    try {
      const cart = await Cart.findOne({ user: req.params.userId });
      await cart.update({
        product: {
          $push: { sales: req.body.sales },
        },
      });
      res.json(cart);
    } catch (e) {
      res.status(401).json('Ошибка ' + e.toString());
    }
  },
};
