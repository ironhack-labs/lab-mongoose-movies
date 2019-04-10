const express = require('express');
const router = express.Router();
const Movie = require('../models/movie.model');

//list
router.get('/', (req, res, next) => {
  Movie.find()
    .then(movies => res.render('movies/index', { movies }))
    .catch(error => next(error));
});

//create & doCreate
router.get('/new', (req, res, next) => {
    res.render('movies/new')
});

router.post('/', (req, res, next) => {
    const movie = new Movie(req.body)
  
    Movie.save()
      .then(() => res.redirect("/movies"))
      .catch((error) => {
        if (error instanceof mongoose.Error.ValidationError) {
          res.render('movies/new', { movie, ...error})
        } else{
          next(error)
        }
      });
});

//edit & doEdit
router.get('/:id/edit', (req, res, next) => {
    const id = req.params.id;

    Movie.findById(id)     
        .then(movies => res.render('movies/edit', { movie, movies }))
        .catch(error => next(error));
});

router.post('/:id',  (req, res, next) => {
    const id = req.params.id;
  
    Movie.findByIdAndUpdate(id, req.body, { new: true})
      .then(movie => res.redirect(`/movies/${movie._id}`))
      .catch(error =>  next(error))
});


//delete
router.post('/:id/delete', (req, res, next) => {
    const id = req.params.id;
  
    Movie.findByIdAndRemove(id)
        .then(() =>  res.redirect('/movies'))
        .catch(error => next(error))
});

router.get('/', (req, res, next) => {
    const id = req.params.id;

    Movie.findById(id)     
        .then(movies => res.render('movies/show', { movie, movies }))
        .catch(error => next(error));
});

//show
router.get('/:id', (req, res, next) => {
    const id = req.params.id;

    Movie.findById(id)     
        .then(movies => res.render('movies/show', { movie, movies }))
        .catch(error => next(error));
});


module.exports = router;