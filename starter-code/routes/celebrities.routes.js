const express = require('express');
const router = express.Router();
const celebritiesController = require('../controllers/celebrities.controller');

router.get('/', celebritiesController.list);

module.exports = router;