const express = require('express');
const router  = express.Router();

const commonController = require('../controllers/common.controller');
const celebritiesController = require('../controllers/celebrities.controller');

/* GET home page */
router.get('/', commonController.home);
router.get('/celebrities', celebritiesController.list);
router.get('/celebrities/:id', celebritiesController.details);

module.exports = router;
