const express = require('express');
const Celebrity = require('../models/celebrity')
const Movie = require('../models/movie')

const router = express.Router();
/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

/* Get celebritys page*/
router.get('/celebrities', (req, res, next) => {
  Celebrity.find()
    .then(celebritiesfromDB => {
      // console.log("celebrity", celebritiesfromDB)
      res.render('celebrities', {
        listOfCelebrities: celebritiesfromDB
      })
    })
    .catch(err => console.log(err))
})
/*Get the movies page*/
router.get('/movies', (req, res, next) => {
  Movie.find()
    .then(moviesfromDB => {
      // console.log("celebrity", celebritiesfromDB)
      res.render('movies', {
        listOfMovies: moviesfromDB
      })
    })
    .catch(err => console.log(err))
})
module.exports = router;
