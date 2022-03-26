const Cart = require('../models/Cart.model');
const VisitCard = require('../models/VisitCard.model');

module.exports.visitCardsController = {
  addVisitCardToCart: async (req, res) => {
    try {
      const { typePaper, count, delivery, price } = req.body;
      const visit = await VisitCard.create({
        typePaper,
        count,
        delivery,
        price,
      });
      const cart = await Cart.findOne({ user: req.user.id });
      const recalculation = cart.total + price;
      await cart.update({
        product: {
          ...cart.product,
          sales: [...cart.product.sales, visit],
        },
        total: recalculation,
      });
      res.json(visit);
    } catch (e) {
      res.status(401).json('Ошибка ' + e.toString());
    }
  },

  deleteVisitCardFromCart: async (req, res) => {
    try {
      const visit = await VisitCard.findById(req.params.id);
      const price = visit.price;
      visit.remove();
      const cart = await Cart.findOne({ user: req.user.id });
      const sales = cart.product.sales.filter((sale) => {
        return String(sale._id) !== req.params.id;
      });
      const recalculation = cart.total - price;
      await cart.update({
        product: {
          ...cart.product,
          sales: sales,
        },
        total: recalculation,
      });
      res.json(visit);
    } catch (e) {
      res.status(401).json('Ошибка ' + e.toString());
    }
  },
};
