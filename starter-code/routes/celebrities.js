const express = require('express');
const router = express.Router();
const celebritiesController = require('../controllers/celebrities.controller');

router.get('/', celebritiesController.list);
router.get('/new', celebritiesController.new);
router.get('/:id/edit',celebritiesController.edit)
router.get('/:id', celebritiesController.show);


router.post('/', celebritiesController.add)
router.post('/:id/delete', celebritiesController.delete);
router.post('/:id', celebritiesController.doEdit)
module.exports = router;