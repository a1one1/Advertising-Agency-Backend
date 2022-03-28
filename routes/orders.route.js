const { Router } = require('express');
const { ordersController } = require('../controllers/orders.controller');
const authMiddleware = require('../middlewares/auth.middleware');

const router = Router();

router.get('/orders', ordersController.getAllOrders);
router.get('/orders/user', authMiddleware, ordersController.getOrderById);
router.patch('/orders/user', authMiddleware, ordersController.addItemsToOrder);

module.exports = router;
