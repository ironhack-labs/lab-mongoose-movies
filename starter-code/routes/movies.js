const express = require('express');
const moviesRouter = express.Router();

const Movie = require('./../models/Movie')

//POST '/movies/edit'
moviesRouter.post('/edit', (req, res) => {
  const _id = req.query._id;
  const {title, genre, plot} = req.body;

  Movie.updateOne({_id}, {title, genre, plot})
    .then( () => {
      res.redirect('/movies')
    })
    .catch( (err) => console.log(err));
})

// GET '/movies/edit' --renders the edit form
moviesRouter.get('/edit', (req, res) => {
  const {_id} = req.query;

  Movie.findOne({_id: _id})
    .then( oneMovie => {
      const movie = oneMovie;
      res.render('movies/edit', {movie});
    })
    .catch( (err) => console.log(err));
})

//GET /movies/:id/delete
moviesRouter.post('/:id/delete', (req, res) => {
  Movie.findByIdAndRemove(req.params.id)
    .then(() => {
      res.redirect('/movies')
    })
    .catch( (err) => {
      next(err)})
});

//GET /movies/new
moviesRouter.get('/new', (req, res) => {
  res.render('movies/new');
})

//POST /movies/new
moviesRouter.post('/new', (req, res) => {
  const {title, genre, plot} = req.body;
  Movie.create({title, genre, plot})
  .then((movie) => {
    res.redirect('/movies')
  })
  .catch( (err) => {
    res.render('movies/new');
  })
});


//GET /movies/:id
moviesRouter.get('/:id', (req, res) =>{
  Movie.findById(req.params.id)
    .then( oneMovie => {
      const movie = oneMovie;
      res.render('movies/show', {movie})
    })
    .catch( (err) => console.log(err));
})

//GET /movies
moviesRouter.get('/', (req, res) => {
  Movie.find()
    .then( (allMovies) => {
    const movies = allMovies;
    res.render('movies', {movies})})
    
    .catch( (err) => console.log(err));
})

module.exports = moviesRouter;