const Cart = require('../models/Cart.model');
const visitCard = require('../models/VisitCard.model');

module.exports.visitCardsController = {
  addVisitCards: async (req, res) => {
    try {
      const { typePaper, count, delivery, price } = req.body;
      const visit = await visitCard.create({
        typePaper,
        count,
        delivery,
        price,
      });
      
      const cart = await Cart.findOneAndUpdate({ user: req.user.id }, );
  
      await cart.update({
        product: {
          ...cart.product,
          sales: [...cart.product.sales, visit]
        },
      });
      const cartRes = await Cart.findOne({ user: req.user.id });
      res.json(cartRes);
    } catch (e) {
      res.status(401).json('Ошибка ' + e.toString());
    }
  },

  deleteVisitCards: async (req, res) => {
    try {
      const visit = await visitCard.findByIdAndDelete(req.params.id);

      const cart = await Cart.findOne({user: req.user.id});
      await cart.update({
        product: {
          sales: []
        }
      })
    } catch (e) {
      res.status(401).json('Ошибка ' + e.toString());
    }
  }
};


// const comment = await Comment.findByIdAndDelete(req.params.id);

// const news = await News.findOne({_id: req.params.newsID});
// const comments = news.comments.filter(item => {
//   return String(item) !== req.params.id
// })

// await News.findByIdAndUpdate(req.params.newsID, {
//   comments: comments
// })