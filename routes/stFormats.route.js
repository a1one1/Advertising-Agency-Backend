const { Router } = require('express');
const { stFormatscontroller } = require('../controllers/stFormats.controller');

const router = Router();

router.post('/stFormat', stFormatscontroller.addStFormat);
router.get('/stFormats', stFormatscontroller.getAllStFormats);
router.patch('/stFormat/:stFormatId', stFormatscontroller.patchStFormat);

module.exports = router;
