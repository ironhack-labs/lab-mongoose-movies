const express = require('express');
const router  = express.Router();
const {home, deleteCeleb, celebDetails, createCelebForm, createCeleb, updateCelebrityForm, updateCelebrity} = require('../controllers/index.controller')
const {catchErrors} = require('../middlewares/catchErrors')
/* GET home page */
router.get('/', home);
router.get('/delete/:id', catchErrors(deleteCeleb))
router.get('/celeb-details/:id', catchErrors(celebDetails))
router.get('/create-celeb', createCelebForm)
router.post('/create-celeb', catchErrors(createCeleb))
router.get('/update-celeb', updateCelebrityForm)
router.post('/update-celeb', catchErrors(updateCelebrity))

const {movieshome, deleteMovie, movieDetails, createMovieForm, createMovie, updateMovieForm, updateMovie} = require('../controllers/moviescontroller')
/* GET home page */
router.get('/movies', movieshome);
router.get('/delete-movie/:id', catchErrors(deleteMovie))
router.get('/movie-details/:id', catchErrors(movieDetails))
router.get('/create-movie', createMovieForm)
router.post('/create-movie', catchErrors(createMovie))
router.get('/update-movie', updateMovieForm)
router.post('/update-movie', catchErrors(updateMovie))
module.exports = router;
