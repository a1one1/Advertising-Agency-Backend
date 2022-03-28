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
    const { selectedA, selectedB } = req.body;
    try {
      const billboard = await Billboard.findById(req.params.billboardId);
      billboard.sideA.selected = selectedA;
      billboard.sideB.selected = selectedB;
      if (billboard.sideA.selected && billboard.sideB.selected) {
        billboard.price *= 2;
      }

      const cart = await Cart.findOne({ user: req.user.id });
      const recalculation = (cart.total += billboard.price);
      await cart.update({
        product: {
          ...cart.product,
          rents: [...cart.product.rents, billboard],
        },
        total: recalculation,
      });
      res.json(billboard);
    } catch (e) {
      res.status(401).json('Ошибка ' + e.toString());
    }
  },

  
  addSTFormatToCart:async (req, res) => {
    const { selectedA, selectedB } = req.body;
    try {
      const STFormat = await StFormat.findById(req.params.stFormatId);
      STFormat.sideA.selected = selectedA;
      STFormat.sideB.selected = selectedB;
      if (STFormat.sideA.selected && STFormat.sideB.selected) {
        STFormat.price *= 2;
      }
      console.log(STFormat);

      const cart = await Cart.findOne({ user: req.user.id });
      const recalculation = (cart.total += STFormat.price);
      await cart.update({
        product: {
          ...cart.product,
          rents: [...cart.product.rents, STFormat],
        },
        total: recalculation,
      });
      res.json(STFormat);
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
