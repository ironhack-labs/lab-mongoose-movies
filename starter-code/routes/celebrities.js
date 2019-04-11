const express = require('express');
const router = express.Router();
const celebritiesController = require('../controllers/celebrities.controller');

router.get('/', celebritiesController.list);
router.get('/new', celebritiesController.new);
router.get('/:id', celebritiesController.show);

router.post('/', celebritiesController.add)
router.post('/:id/delete', celebritiesController.delete);
module.exports = router;