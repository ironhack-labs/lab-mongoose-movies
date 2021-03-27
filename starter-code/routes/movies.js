const express = require('express');
const Movie = require('../models/movie');

const router  = express.Router();

router.get('/movies/index', (req, res, next) => {
  const movies =  Movie.find()

  
  .then(movies => {
    console.log(movies)
    res.render('./movies/index', {movies})
  })
  
  .catch(err => {
    next(err);
    return err;    
  }) 
})

router.get('/movies/new', (req, res, next) => {
    res.render('./movies/new')
});
  


router.post('/movies', (req, res, next) => {
  const newMovie = req.body;
  
  Movie.create(newMovie)
  
  .then(() => {
    res.redirect('/movies/index')
  })
  
  .catch(err => {
    next(err);
    return err;    
  }) 
})


router.get('/movies/:id', (req, res, next) => {
  const { id } = req.params;
  const { movieDetail } = req.body;
  
  Movie.findById(id)
  
  .then(movieDetail => {
    res.render('./movies/show', {movieDetail})
  })
  
  .catch(err => {
    next(err);
    return err;    
  }) 
})

router.get('/movies/:id/edit', (req, res, next) => {
  const { id } = req.params;

  const { movieDetail } = req.body;

  Movie.findById(id)
  .then(movieDetail => {
    res.render('./movies/edit', { movieDetail })
  })

  .catch(err => {
    next(err);
    return err;    
  }) 
})

router.post('/movies/:id/edit', (req, res, next) => {
  const updatedMovie = req.body;
  const { id } = req. params;

  Movie.findByIdAndUpdate(id, updatedMovie)

  .then(() => {
    res.redirect('/movies/index')
  })

  .catch(err => {
    next(err);
    return err;    
  }) 
})

router.post('/movies/:id/delet', (req, res, next) =>{
  const { id } = req.params;
  
  Movie.findByIdAndDelete(id)
  .then(() => {
    res.redirect('/movies/index')
  })

  .catch(err => {
    next(err);
    return err;    
  }) 
})




module.exports = router;