const { Router } = require('express');
const { reviewsController } = require('../controllers/reviews.controller');
const authMiddleware = require('../middlewares/auth.middleware');

const router = Router();

router.get('/reviews', reviewsController.getAllReviews);
router.post('/reviews', authMiddleware, reviewsController.addReview);
router.delete('/review', authMiddleware, reviewsController.deleteReview);

module.exports = router;
