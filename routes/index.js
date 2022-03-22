const { Router } = require('express');

const router = Router();

router.use( require('./billboards.route'));
router.use( require('./stFormats.route'));

module.exports = router;
