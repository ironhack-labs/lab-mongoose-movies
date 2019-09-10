const express = require('express');
const router  = express.Router();
const { home, movies, celebrities, celebrityDetail, addCelebrity, addCelebrityForm, editCelebrity, editCelebrityForm, deleteCelebrity, movieDetail, addMovie, addMovieForm, editMovie, editMovieForm,deleteMovie } = require('../controllers/index')
const { catchErrors } = require('../middlewares/catchErrors')

//Home
router.get('/', home)

//Celebriites
router.get('/celebrities/all', celebrities)
router.get('/celebrities/detail/:id', celebrityDetail)
router.get('/celebrities/add', addCelebrityForm)
router.post('/celebrities/add', catchErrors(addCelebrity))
router.post('/celebrities/:id/delete', catchErrors(deleteCelebrity))
router.get('/celebrities/edit', editCelebrityForm)
router.post('/celebrities/edit', catchErrors(editCelebrity))

// Movies
router.get('/movies/all', movies)
router.get('/movies/detail/:id', movieDetail)
router.get('/movies/add', addMovieForm)
router.post('/movies/add', catchErrors(addMovie))
router.post('/movies/:id/delete', catchErrors(deleteMovie))
router.get('/movies/edit', editMovieForm)
router.post('/movies/edit', catchErrors(editMovie))


module.exports = router;

