const Cart = require('../models/Cart.model');
const visitCard = require('../models/VisitCard.model');

module.exports.visitCardsController = {
  addVisitCard: async (req, res) => {
    try {
      const { typePaper, count, delivery, price } = req.body;
      const visitCrd = await visitCard.create({
        typePaper,
        count,
        delivery,
        price,
      });
      const cart = await Cart.findOneAndUpdate({ user: req.user.id });
      await cart.update({
        product: {
          ...cart.product,
          sales: [...cart.product.sales, visitCrd],
        },
        total: cart.product.sales.reduce(
          (acc, sale) => (acc += sale),
          cart.total,
        ),
      });
      const cartJson = await Cart.findOne({ user: req.user.id });
      res.json(cartJson);
    } catch (e) {
      res.status(401).json('Ошибка ' + e.toString());
    }
  },
  deleteVisitCard: async (req, res) => {
    try {
      const visitCrd = await visitCard.findByIdAndDelete(req.params.id);
      const cart = await Cart.findOne({ user: req.user.id });
      await cart.update({
        product: {
          ...cart.product,
          sales: [
            ...cart.product.sales.filter((sale) => sale._id !== req.body.id),
          ],
          total: cart.product.sales.reduce(
            (acc, sale) => (acc -= sale.price),
            cart.total,
          ),
        },
      });
      res.json(visitCrd);
    } catch (e) {
      res.status(401).json('Ошибка ' + e.toString());
    }
  },
};
