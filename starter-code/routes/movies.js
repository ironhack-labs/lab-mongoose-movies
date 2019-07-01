const express = require('express');
const router  = express.Router();
const { findMovies, findOneMovie, getCreateOneMovie, postCreateOneMovie, deleteOneMovie, getUpdateOneMovie, updateOneMovie } = require('../controllers/movies.controller')

router.get('/movies', findMovies)
router.post('/movies', postCreateOneMovie)
router.get('/movies/new', getCreateOneMovie)
router.post('/movies/:id/delete', deleteOneMovie)
router.get('/movies/:id', findOneMovie)
router.get('/movies/:id/edit', getUpdateOneMovie)
router.post('/movies/:id', updateOneMovie)
module.exports = router;