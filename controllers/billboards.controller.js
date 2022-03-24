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
}
//   patchSideABillboard: async (req, res) => {
//     try {
//       const { sideA } = req.body;
//       const billboard = await Billboard.findByIdAndUpdate(
//         req.params.billboardId,
//         {
//           sideA,
//         },
//       );
//       res.json(billboard);
//     } catch (e) {
//       res.status(401).json('Ошибка ' + e.toString());
//     }
//   },
//   patchSideBBillboard: async (req, res) => {
//     try {
//       const billboard = await Billboard.findByIdAndUpdate(
//         req.params.billboardId,
//         {
//           sideB: req.body.sideB,
//         },
//       );
//       console.log(req.params.billboardId);

//       const responce = await Billboard.findById(req.params.billboardId);
//       res.json(responce);
//       console.log(responce);
//     } catch (e) {
//       res.status(401).json('Ошибка ' + e.toString());
//     }
//   },
// };
