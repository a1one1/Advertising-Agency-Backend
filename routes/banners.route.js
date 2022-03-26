const { Router } = require('express');
const { bannersController } = require('../controllers/banners.controller');

const authMiddleware = require('../middlewares/auth.middleware');

const router = Router();

router.post('/banners/:id', authMiddleware, bannersController.addBannerToCart);
router.delete('/banners/:id', authMiddleware, bannersController.deleteBannerFromCart);

module.exports = router;