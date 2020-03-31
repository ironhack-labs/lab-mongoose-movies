const express = require('express');
const router = express.Router();
const celebrities = require('./celebrities');
const movies = require('./movies');


/* GET home page */
router.get('/', (req, res, next) => {
    res.render('index');
});

//Celebrities routes
router.post('/celebrities/:id/delete', celebrities.deleteCelebrity)
router.get('/celebrities', celebrities.index);
router.post('/celebrities', celebrities.createCelebrity)
router.get('/celebrities/new', celebrities.addCelebrity);
router.get('/celebrities/:id', celebrities.celebrityInfo);

//Movies routes
router.post('/movies/:id/delete', movies.deleteMovie)
router.get('/movies', movies.index);
router.post('/movies', movies.createMovie)
router.get('/movies/new', movies.addMovie);
router.get('/movies/:id', movies.moviesInfo);


module.exports = router