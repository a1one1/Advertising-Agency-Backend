const Cart = require('../models/Cart.model');
const visitCard = require('../models/VisitCard.model');

module.exports.visitCardsController = {
  addVisitCard: async (req, res) => {
    try {
      const { typePaper, count, delivery, price } = req.body;
      const visit = await visitCard.create({
        typePaper,
        count,
        delivery,
        price,
      });
      const cart = await Cart.findOne({ user: req.user.id });
      const result = cart.total + price;
      await cart.update({
        product: {
          ...cart.product,
          sales: [...cart.product.sales, visit]
        },
        total: result
      });
      const cartRes = await Cart.findOne({ user: req.user.id });
      res.json(visit);
    } catch (e) {
      res.status(401).json('Ошибка ' + e.toString());
    }
  },

  deleteVisitCard: async (req, res) => {
    try {
      const visit = await visitCard.findById(req.params.id);
      const price = visit.price
      visit.remove()
      const cart = await Cart.findOne({user: req.user.id});
      const sales = cart.product.sales.filter(sale => {
        return String(sale._id) !== req.params.id
      });
      const result = cart.total - price
      await cart.update({
        product: {
          ...cart.product,
          sales: sales
        },
        total: result
      })
      res.json(visit)
    } catch (e) {
      res.status(401).json('Ошибка ' + e.toString());
    }
  }
};