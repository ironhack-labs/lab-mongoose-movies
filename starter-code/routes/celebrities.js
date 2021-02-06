const express = require('express');
const router = express.Router();
const Celebrity = require('../models/Celebrity.model')
const celebritiesController = require('../controllers/celebrities.controller');

console.log('CELEB ROUTES')

router.get('/celebrities', celebritiesController.list)

module.exports = router