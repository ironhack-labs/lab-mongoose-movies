const express = require('express');

const router = express.Router();


const moviesController = require("../controllers/movies.controller");
// Iteration 8
router.get('/movies',moviesController.list);
// Iteration 10 

router.get('/movies/new',moviesController.create);

router.post('/movies',moviesController.doCreate);
// Iteration 11
router.post('/movies/:id/delete',moviesController.delete)
// Iteration 12

router.get('/movies/:id/edit',moviesController.edit);

router.post('/movies/:id',moviesController.doEdit);

// Iteration 9 
router.get('/movies/:id',moviesController.detail);



module.exports = router;