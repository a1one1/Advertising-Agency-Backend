const { Router } = require('express');
const { cartsController } = require('../controllers/carts.controller');
const authMiddleware = require('../middlewares/auth.middleware');

const router = Router();

router.get('/carts', cartsController.getAllCarts);
router.patch(
  '/cart/billboard/:billboardId/rents',
  authMiddleware,
  cartsController.addCartRentsBillboard,
);
router.patch(
  '/cart/stFormat/:stFormatId/rents',
  authMiddleware,
  cartsController.addCartRentsStFormat,
);
router.delete(
  '/cart/delete/rent',
  authMiddleware,
  cartsController.deleteCartItem,
);
router.get('/cart/user', authMiddleware, cartsController.getIdCart);

module.exports = router;
