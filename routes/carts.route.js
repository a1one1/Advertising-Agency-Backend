const { Router } = require('express');
const { cartsController } = require('../controllers/carts.controller');
const authMiddleware = require('../middlewares/auth.middleware');

const router = Router();

router.get('/carts', cartsController.getAllCarts);
router.get('/cart/:userId', cartsController.getIdCart);
router.patch('/cart/billboard/:billboardId/rents',  authMiddleware, cartsController.addCartRents)

module.exports = router;
