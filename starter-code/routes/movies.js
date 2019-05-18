const express = require('express')
const router = express.Router()

const Movie = require('../models/movie')


router.get('/', (req, res, next) => res.render('movies-index'))

router.get('/list', (req, res, next) => {                            
  Movie.find()                                                         
    .then(allMovies =>{
      console.log(allMovies)
       res.render('movies-list', { movies: allMovies }) 
      })  
    .catch(error => console.log(error))
})

module.exports = router