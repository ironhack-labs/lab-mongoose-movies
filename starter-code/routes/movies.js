const express = require('express');
const { render, response, removeListener } = require('../app');
const router  = express.Router();
const Movie = require('../models/movie')

/* GET home page */
router.get('/', (req, res, next) => {
    Movie.find()
    .then(allMovies =>{
      console.log("All movies:", allMovies)
      res.render('../views/movies/index', {movies: allMovies})
    })
    .catch(err => console.log('There has been an error: ', err))
});


/* GET NEW PAGE FOR ADDING NEW MOVIE */
router.get('/new', (req,res) => {
    res.render('../views/movies/newMovie')
  });


/* GET movie page (dep on ID) */
router.get('/:id', (req,res,next) => {
    const {id} = req.params
    console.log(id)
    Movie.findById(id)
    .then( foundMovie =>{
        console.log('Found movie by ID ', foundMovie)
        res.render('../views/movies/moviePage', foundMovie)
    })
    .catch(err => console.log('There has been an error: ', err))
})

/* POST NEW MOVIE */
router.post('/', (req,res,next) => {
    const {name, genre, plot} = req.body
    Movie.create({
        name,
        genre,
        plot
    })
    .then(newMovie => {
        console.log('New movie added to DB ', newMovie)
        res.redirect('/movies')
    })
    .catch(err => console.log('Some error has occurred ',err ))
})


/* POST DELETE MOVIE */
router.post('/:id/delete', (req,res,next) => {
    const {id} = req.params
    Movie.findByIdAndDelete(id)
    .then(() => {
        console.log('Movie is deleted')
        res.redirect('/movies')
    })
    .catch(err => console.log('Some error has occurred ',err ))
})



module.exports = router;