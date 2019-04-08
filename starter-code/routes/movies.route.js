const express = require('express');
const router = express.Router();
const movieController =  require('../controllers/movies.controllers');


router.get('/movies/new', movieController.create);
router.post('/movies', movieController.doCreate);

router.get('/movies/:id/edit', movieController.edit);
router.post('/movies/:id', movieController.doEdit);

router.post('/:id/delete', movieController.delete);

router.get('/movies', movieController.list);
router.get('/movies/:id', movieController.show);


module.exports = router;