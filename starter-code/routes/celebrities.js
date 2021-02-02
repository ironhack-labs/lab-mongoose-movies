const express = require('express');
const router = express.Router();
const Celebrity = require("../models/Celebrity.model")
const celebritiesController = require("../controllers/celebrities.controller")

/* Celebrities */
router.get('/celebrities/index', celebritiesController.list)

/* Add celebrities */
router.get('/celebrities/new', celebritiesController.create)

router.post('/celebrities/new', celebritiesController.doCreate)

/* Edit celebrities */
router.get('/celebrities/:id/edit', celebritiesController.edit)

router.post('/celebrities/:id/edit', celebritiesController.doEdit)

/* Delete celebrities */
router.post('/celebrities/:id/delete', celebritiesController.delete)

/* Celebrities details */
router.get('/celebrities/:id', celebritiesController.details)

module.exports = router;