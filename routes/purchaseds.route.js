const { Router } = require('express')
const { purchasedsController } = require('../controllers/purchaseds.controller')
const authMiddleware = require('../middlewares/auth.middleware')

const router = Router()

router.get('/purchaseds', purchasedsController.getAllPurchaseds)
router.get('/purchased/user', authMiddleware, purchasedsController.getIdPurchased)
router.patch('/purchased/user', authMiddleware, purchasedsController.addItemsToPurchased)
