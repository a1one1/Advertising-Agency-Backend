const Billboard = require('../models/Billboard.model');

module.exports.billboardsController = {
  addBillboard: async (req, res) => {
    try {
      const { name, sideA, sideB, image, address, price } = req.body;
      const billboard = await Billboard.create({
        name,
        sideA,
        sideB,
        image,
        address,
        price,
      });
      res.json(billboard);
    } catch (e) {
      res.status(401).json('Ошибка ' + e.toString());
    }
  },
  getAllBillboards: async (req, res) => {
    try {
      const billboard = await Billboard.find();
      res.json(billboard);
    } catch (e) {
      res.status(401).json('Ошибка ' + e.toString());
    }
  },
  patchBillboard: async (req, res) => {
    try {
      const { sideA, sideB } = req.body;
      const billboard = await Billboard.findByIdAndUpdate(
        req.params.billboardId,
        {
          sideA,
          sideB,
        },
      );
      res.json(billboard);
    } catch (e) {
      res.status(401).json('Ошибка ' + e.toString());
    }
  },
};
