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
      const cart = await Cart.findOne({ user: req.params.userId });
      res.json(cart);
    } catch (e) {
      res.status(401).json('Ошибка ' + e.toString());
    }
  },
  addCartRentsBillboard: async (req, res) => {
    try {
      const billboard = await Billboard.findById(req.params.billboardId);
      let newBillboard = billboard;
      newBillboard.sideA = req.body.sideA;
      newBillboard.sideB = req.body.sideB;
      const cart = await Cart.findOne({ user: req.user.id });
      await cart.update({
        product: {
          ...cart.product,
          rents: [...cart.product.rents, newBillboard],
        },
        total: cart.product.rents.reduce(
          (acc, rent) => (acc += rent.price),
          cart.total,
        ),
      });
      const json = await Cart.findOne({ user: req.user.id });
      res.json(json);
    } catch (e) {
      res.status(401).json('Ошибка ' + e.toString());
    }
  },
};
