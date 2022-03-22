const Billboard = require('../models/Billboard.model');

module.exports.billboardsController = {
  addBillboard: async (req, res) => {
    try {
      const { sideA, sideB, image, address, price } = req.body;
      const billboard = await Billboard.create({
        sideA,
        sideB,
        image,
        address,
        price,
      });
      res.json(billboard);
    } catch (e) {
      res.status(401).json('Ошибка' + e.toString());
    }
  },
  getAllBillboards: async (req, res) => {
    try {
      const billboard = await Billboard.find();
      res.json(billboard);
    } catch (e) {
      res.status(401).json('Ошибка' + e.toString());
    }
  },
};
