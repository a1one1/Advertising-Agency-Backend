const { Router } = require('express');
const { stFormatscontroller } = require('../controllers/stFormats.controller');

const router = Router();

router.post('/stFormat', stFormatscontroller.addStFormat);
router.get('/stFormats', stFormatscontroller.getAllStFormats);

module.exports = router;
