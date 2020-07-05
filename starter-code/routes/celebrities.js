const express = require('express')
const router = express.Router()
const Celebrity = require('../models/Celebrity.model')
const Movie = require('../models/Movie.model')

router.get('/celebrities', (req, res, next) => {
    Celebrity.find({})
        .then(celebrities => res.render('celebrities/', {myCelebrities: celebrities}))
        .catch(error => console.log(error))   
})

router.get('/celebrities/new', (req, res, next) => {
    // Iteration #3: Add a new drone
    res.render('celebrities/new')
  });
  
  router.post('/celebrities/new', (req, res, next) => {
    // Iteration #3: Add a new drone
    const body = req.body;
    Celebrity.create(body)
    .then((data) => {
      console.log(data)
      res.redirect('/celebrities')
    })
    .catch(e => console.log('Error', e))
  });

  // Cuando es con link es un router.get y cuando es con .post es formulario
  router.post('/celebrities/:id/delete', (req, res, next) => {
    // Iteration #5: Delete the drone
    Celebrity.findByIdAndDelete(req.params.id)
    .then(()=> res.redirect('/celebrities'))
    .catch((error)=> error)
  });
  

  router.get('/celebrities/:id/edit', (req, res, next) => {
    // Iteration #4: Update the drone
    const celebrityId = req.params.id;
    Celebrity.findById(celebrityId)
    .then((celebrity)=> res.render('celebrities/edit', celebrity))
    .catch((error)=> error)
  });
  
  router.post('/celebrities/:id/edit', (req, res, next) => {
    // Iteration #4: Update the drone
    const body = req.body;
    const celebrityId = req.params.id;
    Celebrity.findByIdAndUpdate(celebrityId, body)
    .then(()=> res.redirect('/celebrities'))
    .catch((error)=> error)
  });



router.get('/celebrities/:id', (req, res, next) => {
    const id = req.params.id
    Celebrity.findById(id)
        .then(celebrity => res.render('celebrities/show', celebrity))
        .catch(error => console.log(error))   
})

// Movies

router.get('/movies', (req, res, next) => {
    Movie.find({})
        .then(movies => res.render('movies/', {myMovies: movies}))
        .catch(error => console.log(error))   
})

router.get('/movies/new', (req, res, next) => {
    // Iteration #3: Add a new drone
    res.render('movies/new')
  });
  
  router.post('/movies/new', (req, res, next) => {
    // Iteration #3: Add a new drone
    const body = req.body;
    Movie.create(body)
    .then((data) => {
      console.log(data)
      res.redirect('/movies')
    })
    .catch(e => console.log('Error', e))
  });

  // Cuando es con link es un router.get y cuando es con .post es formulario
  router.post('/movies/:id/delete', (req, res, next) => {
    // Iteration #5: Delete the drone
    Movie.findByIdAndDelete(req.params.id)
    .then(()=> res.redirect('/movies'))
    .catch((error)=> error)
  });
  

  router.get('/movies/:id/edit', (req, res, next) => {
    // Iteration #4: Update the drone
    const movieId = req.params.id;
    Movie.findById(movieId)
    .then((movie)=> res.render('movies/edit', movie))
    .catch((error)=> error)
  });
  
  router.post('/movies/:id/edit', (req, res, next) => {
    // Iteration #4: Update the drone
    const body = req.body;
    const movieId = req.params.id;
    Movie.findByIdAndUpdate(movieId, body)
    .then(()=> res.redirect('/movies'))
    .catch((error)=> error)
  });



router.get('/movies/:id', (req, res, next) => {
    const id = req.params.id
    Movie.findById(id)
        .then(movie => res.render('movies/show', movie))
        .catch(error => console.log(error))   
})

module.exports = router  