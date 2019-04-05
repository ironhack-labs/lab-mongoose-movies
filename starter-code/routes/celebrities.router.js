const express = require('express');
const router  = express.Router();
const celebritiesController = require('../controllers/celebrities.controller')
/* GET home page */
router.get('/', celebritiesController.list);

router.get('/new', celebritiesController.new)
router.post('/', celebritiesController.create)

router.get('/:id', celebritiesController.detail)
router.post('/:id/delete', celebritiesController.delete)

router.get('/:id/edit', celebritiesController.edit)
router.post('/:id', celebritiesController.doEdit)

module.exports = router;