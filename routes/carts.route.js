const { Router } = require('express');
const { cartsController } = require('../controllers/carts.controller');
const authMiddleware = require('../middlewares/auth.middleware');

const router = Router();

router.get('/carts', cartsController.getAllCarts);
router.get('/cart/:userId', authMiddleware, cartsController.getIdCart);
router.patch('/cart/:userId/rents', cartsController.addCartRents);
router.patch('/cart/:userId/sales', cartsController.addCartSales);

module.exports = router;
