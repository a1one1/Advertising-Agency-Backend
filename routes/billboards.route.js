const { Router } = require('express');
const {
  billboardsController,
} = require('../controllers/billboards.controller');

const router = Router();

router.post('/billboard', billboardsController.addBillboard);
router.get('/billboards', billboardsController.getAllBillboards);
// router.patch(
//   '/billboard/sidea/:billboardId',
//   billboardsController.patchSideABillboard,
// );
// router.patch(
//   '/billboard/sideb/:billboardId',
//   billboardsController.patchSideBBillboard,
// );

module.exports = router;
