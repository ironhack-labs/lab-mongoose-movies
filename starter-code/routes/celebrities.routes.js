const express               = require('express');
const router                = express.Router();
const celebritiesController = require('../controllers/celebrities.controller');


router.get('/index', celebritiesController.list);
router.get('/:id',   celebritiesController.details);

/*
router.post('/', booksController.doCreate);

router.get('/:id/edit', booksController.edit);
router.post('/:id', booksController.doEdit);

router.post('/:id/delete', booksController.delete);

router.post('/:id/like', booksController.like);

router.get('/', booksController.list);
router.get('/:id', booksController.details);
*/

module.exports = router;