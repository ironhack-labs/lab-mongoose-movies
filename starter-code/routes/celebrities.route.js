const express = require('express');
const router = express.Router();
const celebritiesController = require('../controllers/celebrities.controller');

router.get('/', celebritiesController.index);
router.get('/celebrities', celebritiesController.indexCelebrities);
router.get('/celebrities/new', celebritiesController.new);
router.get('/celebrities/:id', celebritiesController.celebrityDetails);

router.post('/celebrities', celebritiesController.doNew);
router.post('/celebrities/:id/delete', celebritiesController.delete);


module.exports = router;