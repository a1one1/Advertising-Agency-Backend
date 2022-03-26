const { Router } = require('express');
const { cartsController } = require('../controllers/carts.controller');
const authMiddleware = require('../middlewares/auth.middleware');

const router = Router();

router.get('/carts', cartsController.getAllCarts);
router.patch(
  '/cart/billboard/:billboardId/rents',
  authMiddleware,
  cartsController.addBillboardToCart,
);
router.patch(
  '/cart/stFormat/:stFormatId/rents',
  authMiddleware,
  cartsController.addSTFormatToCart,
);
router.delete('/cart/delete/rent', authMiddleware, cartsController.deleteItemFromCart)
router.get('/cart/user', authMiddleware, cartsController.getCartById);

module.exports = router;
