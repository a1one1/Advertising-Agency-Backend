const { Router } = require('express');
const { claimsController } = require('../controllers/claims.controller');

const authMiddleware = require('../middlewares/auth.middleware');

const router = Router()

router.post("/claims", authMiddleware, claimsController.addClaims)

module.exports = router
