const express = require('express')
const router = express.Router()

const Movie = require('../models/Movie.model')

//movies:

router.get('/movies/index',(req,res)=>{
  Movie.find()
  .then(moviesFromDB => res.render('movies/index',{movies: moviesFromDB}))
  
  .catch(err=> console.log(`Error while displaying celebrities: ${err}`))
})

//Details movies:

router.get('/movies/:id', (req, res, next) => {
  Movie.findById(req.params.id)
    .then((movie) => {
    res.render ("movies/show", movie)
    })
    .catch((e) => next(e))
})
