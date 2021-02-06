const express = require('express');
const router = express.Router();
const Celebrity = require('../models/Celebrity.model')
const celebritiesController = require('../controllers/celebrities.controller');

console.log('CELEB ROUTES')


router.post('/celebrities/:id/edit', celebritiesController.update)
router.get('/celebrities/:id/edit', celebritiesController.renderEdit)
router.post('/celebrities/:id/delete', celebritiesController.delete)
router.post('/celebrities/new', celebritiesController.new)
router.get('/celebrities/new', celebritiesController.renderNew)
router.get('/celebrities/:id', celebritiesController.show)
router.get('/celebrities', celebritiesController.list)

module.exports = router