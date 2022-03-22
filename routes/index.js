const { Router } = require('express');

const router = Router();


router.use( require('./billboards.route'));
router.use( require('./stFormats.route'));

router.use(require('./carts.route'));
router.use(require('./users.route'));


module.exports = router;
