const { Router } = require('express');
const { cartsController } = require('../controllers/carts.controller');

const router = Router();

router.get('/carts', cartsController.getAllCarts);
router.get('/cart/:userId', cartsController.getIdCart);

module.exports = router;
