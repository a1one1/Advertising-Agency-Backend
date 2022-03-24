const { Router } = require('express');
const {
  visitCardsController,
} = require('../controllers/visitCards.controller');
const authMiddleware = require('../middlewares/auth.middleware');

const router = Router();

router.post('/visitcard', authMiddleware, visitCardsController.addVisitCard);
router.delete('/visitcard/:id', authMiddleware, visitCardsController.deleteVisitCard);

module.exports = router;
