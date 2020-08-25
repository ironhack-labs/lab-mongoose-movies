const express = require('express');
const router = express.Router();
 
 //Iteration #7: The Movie Model
 const Movie = require('../models/Movie.model')

 //Iteration #8: Listing Our Movies
 router.get('/movies', (req, res) => {

    Movie
     .find()
     .then(allmovies => res.render('movies/index', {allmovies}))
     .catch(err => console.log(`Error while getting movies from the DB: ${err}`))
  
  })

  //Iteration #9: The Movie Details Page
  router.get('/movies/show/:id', (req, res) => {

    Movie
      .findById(req.params.id)
      .then(allmovies => res.render('movies/show', allmovies))
      .catch(err => console.log(`Error while getting movies from the DB: ${err}`))
  
  })


  //Iteration #10: Adding New Movies

  router.get('/movies/new', (req, res) => {
    res.render('movies/new')
  })
  router.post('/movies/new', (req, res) => {
  
    const {title,genre,plot} = req.body
  
    Movie
      .create({title,genre,plot})
      .then(() => res.redirect('/movies'))
      .catch(err => console.log(`Error while adding new movies from the DB: ${err}`))
  
  })

  //Iteration #11: Deleting Movies

  router.post('/movies/:id/delete', (req, res) => {

    Movie
      .findByIdAndRemove(req.query.id)
      .then(() => res.redirect('/movies'))
      .catch(err => console.log(`Error while deleting new movies from the DB: ${err}`))

  })
  //Iteration #12 (Bonus): Editing Movies
  router.get('/movies/edit', (req, res) => {

    Movie
      .findById(req.query.movieId)
      .then(theMovie => res.render('movies/edit-form', theMovie))
      .catch(err => console.log(`Error while editing movies from the DB: ${err}`))
      
  })
  
  router.post('/movies/edit/:movieId', (req, res) => {
  
    const {title,genre,plot} = req.body
  
    Movie
      .findByIdAndUpdate(req.params.movieId, {title,genre,plot},{new:true})
      .then(() => res.redirect('/movies'))
      .catch(err => console.log(`Error while editing movies from the DB: ${err}`))
  
  })
  
  module.exports = router;