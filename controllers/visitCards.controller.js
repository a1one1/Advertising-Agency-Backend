const visitCard = require('../models/VisitCard.model');

module.exports.visitCardsController = {
  addVisitCards: async (req, res) => {
    try {
      const { name, typePaper, count, delivery, price } = req.body;
      const visitCards = await visitCard.create({
        name,
        typePaper,
        count,
        delivery,
        price,
      });
      res.json(visitCards);
    } catch (e) {
      res.status(401).json('Ошибка ' + e.toString());
    }
  },
};
