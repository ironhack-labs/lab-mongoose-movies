const express               = require('express');
const router                = express.Router();
const moviesController = require('../controllers/movies.controller');


router.get('/new', moviesController.create);
router.post('/index', moviesController.doCreate);

router.get('/:id/edit', moviesController.edit);
router.post('/:id', moviesController.doEdit);

router.post('/:id/delete', moviesController.delete);

router.get('/index', moviesController.list);
router.get('/:id',   moviesController.details);


module.exports = router;