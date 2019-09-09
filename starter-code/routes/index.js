const express = require('express');
const router  = express.Router();

//Import celebrity functions
const {allCelebrities} = require('../controllers/index-controller')
const {getCelebInfo} = require('../controllers/celebrity-controller')
const {createCelebrity} = require('../controllers/create-celebrity-controller')
const {deleteCelebrity} = require('../controllers/delete-celebrity-controller')


//Import movies functions
const {allMovies} = require('../controllers/movies-list-controller')
const {getMovieInfo} = require('../controllers/movie-controller')
const {createMovie} = require('../controllers/create-movie-controller')
const {deleteMovie} = require('../controllers/delete-movie-controller')
//CELEBRITIES

/* Celebrities list page */
router.get('/', allCelebrities)

//Celeb page 
router.get('/celebrity/:celebid', getCelebInfo)

//Create celeb page
router.get('/create-celebrity', (req,res)=> res.render('create-celebrity'))

router.post('/create-celebrity', createCelebrity)

//Delete celeb page
router.post('/delete-celebrity/:celebid', deleteCelebrity)


//MOVIES

//Movies list page
router.get('/movies-list', allMovies)

// movie page
router.get('/movie/:movieid', getMovieInfo)


//Create movie page
router.get('/create-movie', (req,res) => res.render('create-movie'))
router.post('/create-movie', createMovie)

//Delete movie
router.post('/delete-movie/:movieid', deleteMovie)

module.exports = router;
