const { Router } = require('express');
const {
  billboardsController,
} = require('../controllers/billboards.controller');

const router = Router();

router.post('/billboard', billboardsController.addBillboard);
router.get('/billboards', billboardsController.getAllBillboards);

module.exports = router;
