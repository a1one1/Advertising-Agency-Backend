const Billboard = require('../models/Billboard.model');
const StFormat = require('../models/StFormat.model');
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
  getCartById: async (req, res) => {
    try {
      const cart = await Cart.findOne({ user: req.user.id });
      res.json(cart);
    } catch (e) {
      res.status(401).json('Ошибка ' + e.toString());
    }
  },
  addBillboardToCart: async (req, res) => {
    try {
      const billboard = await Billboard.findById(req.params.billboardId);
      let newBillboard = billboard;
      newBillboard.sideA = req.body.sideA;
      newBillboard.sideB = req.body.sideB;
      const cart = await Cart.findOne({ user: req.user.id });
      if (newBillboard.sideA && newBillboard.sideB) {
      if (newBillboard.sideA && newBillboard.sideA) {
        newBillboard.price = newBillboard.price * 2;
      }
      const recalculation = (cart.total += newBillboard.price);
      await cart.update({
        product: {
          ...cart.product,
          rents: [...cart.product.rents, newBillboard],
        },
        total: recalculation,
      });
      const json = await Cart.findOne({ user: req.user.id });
      res.json(json);
    } catch (e) {
      res.status(401).json('Ошибка ' + e.toString());
    }
  },
  addSTFormatToCart: async (req, res) => {
    try {
      const stFormat = await StFormat.findById(req.params.stFormatId);
      let newStFormat = stFormat;
      newStFormat.sideA = req.body.sideA;
      newStFormat.sideB = req.body.sideB;
      const cart = await Cart.findOne({ user: req.user.id });
      if (newStFormat.sideA && newStFormat.sideA) {
        newStFormat.price = newStFormat.price * 2;
      }
      const recalculation = (cart.total += newStFormat.price);
      await cart.update({
        product: {
          ...cart.product,
          rents: [...cart.product.rents, newStFormat],
        },
        total: recalculation,
      });
      const json = await Cart.findOne({ user: req.user.id });
      res.json(json);
    } catch (e) {
      res.status(401).json('Ошибка ' + e.toString());
    }
  },
  deleteItemFromCart: async (req, res) => {
    try {
      const cart = await Cart.findOne({ user: req.user.id });
      const item = cart.product.rents.filter(
        (item) => item._id.toString() === req.body.id,
      );
      const recalculation = (cart.total -= item[0].price);
      await cart.update({
        product: {
          ...cart.product,
          rents: [
            ...cart.product.rents.filter(
              (rent) => String(rent._id) !== req.body.id,
            ),
          ],
        },
        total: recalculation,
      });
      res.json(cart);
    } catch (e) {
      res.status(401).json('Ошибка ' + e.toString());
    }
  },
};
