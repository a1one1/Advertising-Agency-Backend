const { Router } = require('express');

const router = Router();


router.use( require('./billboards.route'));
router.use( require('./stFormats.route'));
router.use(require('./reviews.route'))
router.use(require('./carts.route'));
router.use(require('./users.route'));
router.use(require('./visitCards.route'))


module.exports = router;
