const express = require('express');
const router = express.Router();
const celebritiesController = require('../controllers/celebrities.controller');

router.get('/', celebritiesController.list);
router.get('/:id', celebritiesController.show)

module.exports = router;