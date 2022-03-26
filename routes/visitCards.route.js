const { Router } = require('express');
const {
  visitCardsController,
} = require('../controllers/visitCards.controller');
const authMiddleware = require('../middlewares/auth.middleware');

const router = Router();

router.post('/visitcard/:id', authMiddleware, visitCardsController.addVisitCardToCart);
router.delete('/visitcard/:id', authMiddleware, visitCardsController.deleteVisitCardFromCart);

module.exports = router;
