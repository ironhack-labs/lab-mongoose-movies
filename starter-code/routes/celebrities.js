const express = require('express');
const router  = express.Router();
const Celebrity = require('../models/Celebrity.model')
const celebritiesController = require('../controllers/celebrities.controller');

router.post('/celebrities/:id/edit', celebritiesController.update)
router.post('/celebrities/:id/delete', celebritiesController.delete)
router.get('/celebrities/:id/edit', celebritiesController.updateView)
router.post('/celebrities/create', celebritiesController.create)
router.get('/celebrities/create', celebritiesController.createView)
router.get('/celebrities/:id', celebritiesController.detail)
router.get('/celebrities', celebritiesController.list)

module.exports = router;