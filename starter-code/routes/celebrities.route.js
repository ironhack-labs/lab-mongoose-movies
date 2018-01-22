const express = require('express');
const router = express.Router();
const celebritiesController = require('../controllers/celebrities.controller');

//router.get('/', celebritiesController.index);
router.get('/', celebritiesController.indexCelebrities);
router.get('/new', celebritiesController.new);
router.get('/:id', celebritiesController.celebrityDetails);
router.get('/:id/edit', celebritiesController.edit);

router.post('/', celebritiesController.doNew);
router.post('/:id', celebritiesController.doEdit);
router.post('/:id/delete', celebritiesController.delete);

module.exports = router;