const express = require('express');
const router = express.Router();
const celebritiesController = require('../controllers/celebrities.controller');

router.get('/', celebritiesController.index);
router.get('/celebrities', celebritiesController.indexCelebrities);

module.exports = router;