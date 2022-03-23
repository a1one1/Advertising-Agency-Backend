const StFormat = require('../models/StFormat.model');

module.exports.stFormatscontroller = {
  addStFormat: async (req, res) => {
    try {
      const { name, sideA, sideB, image, address, price } = req.body;
      const stFormat = await StFormat.create({
        name,
        sideA,
        sideB,
        image,
        address,
        price,
      });
      res.json(stFormat);
    } catch (e) {
      res.status(401).json('Ошибка ' + e.toString());
    }
  },
  getAllStFormats: async (req, res) => {
    try {
      const stFormat = await StFormat.find();
      res.json(stFormat);
    } catch (e) {
      res.status(401).json('Ошибка ' + e.toString());
    }
  },
};
