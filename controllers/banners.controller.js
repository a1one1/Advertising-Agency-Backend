const Banner = require('../models/Banner.model');
const Cart = require('../models/Cart.model');

module.exports.bannersController = {
  addBannerToCart: async (req, res) => {
    try {
      const { typePaper, count, delivery, price } = req.body;
      const banner = await Banner.create({
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
          sales: [...cart.product.sales, banner]
        },
        total: recalculation
      });
      res.json(banner);
    } catch (e) {
      res.status(401).json('Ошибка ' + e.toString());
    }
  },

  deleteBannerFromCart: async (req, res) => {
    try {
      const banner = await Banner.findById(req.params.id);
      const price = banner.price
      banner.remove()
      const cart = await Cart.findOne({user: req.user.id});
      const sales = cart.product.sales.filter(sale => {
        return String(sale._id) !== req.params.id
      });
      const recalculation = cart.total - price
      await cart.update({
        product: {
          ...cart.product,
          sales: sales
        },
        total: recalculation
      })
      res.json(banner)
    } catch (e) {
      res.status(401).json('Ошибка ' + e.toString());
    }
  }
};