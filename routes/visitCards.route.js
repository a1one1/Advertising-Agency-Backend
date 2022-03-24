const { Router } = require('express');
const {
  visitCardsController,
} = require('../controllers/visitCards.controller');
const authMiddleware = require('../middlewares/auth.middleware');

const router = Router();

router.post('/visitcard', authMiddleware, visitCardsController.addVisitCards);
router.delete('/visitcard/:id', authMiddleware, visitCardsController.deleteVisitCards);

module.exports = router;
