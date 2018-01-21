const express = require('express');
const router = express.Router();
const celebritiesController = require('../controllers/celebrities.controller');

router.get('/', celebritiesController.index);
router.get('/celebrities', celebritiesController.indexCelebrities);
router.get('/celebrities/new', celebritiesController.new);
router.post('/celebrities', celebritiesController.doNew);
router.get('/celebrities/:id', celebritiesController.celebrityDetails);



module.exports = router;