const express = require('express');
const router = express.Router();
const celebritiesController = require('../controllers/celebrities.controller');


router.get('/new', celebritiesController.new);
router.post('/new', celebritiesController.newCeleb);

router.get('/', celebritiesController.list);
router.get('/:id', celebritiesController.get);

router.post('/:id/delete', celebritiesController.delete);


//router.get('/:id/edit', celebritiesController.edit);
router.get('/:id/edit', celebritiesController.edit);
router.post('/:id/edit', celebritiesController.doEdit);

module.exports = router;