const { Router } = require('express');
const { ordersController } = require('../controllers/orders.controller');
const authMiddleware = require('../middlewares/auth.middleware');

const router = Router();

router.get('/purchaseds', ordersController.getAllOrders);
router.get('/purchased/user', authMiddleware, ordersController.getOrderById);
router.patch('/purchased/user', authMiddleware, ordersController.addItemToOrder);

module.exports = router;
