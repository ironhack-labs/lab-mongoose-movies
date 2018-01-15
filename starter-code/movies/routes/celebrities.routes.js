const express = require('express');
const router = express.Router();
const celebritiesController = require('../controllers/celebrities.controller');

router.get('/', celebritiesController.index);

router.get('/new', celebritiesController.new);
router.post('/', celebritiesController.create);

router.get('/:id', celebritiesController.show);

// router.post('/', celebritiesController.create);

// router.get('/:id/edit', celebritiesController.edit);
// router.post('/:id', celebritiesController.update);

// router.get('/:id', celebritiesController.show);

// router.post('/:id/delete', celebritiesController.delete);

module.exports = router;