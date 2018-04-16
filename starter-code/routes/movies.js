const express = require('express');
const router = express.Router();
const Movies = require('../models/Movies');

router.get('/', (req, res) => {
  Movies.find()
    .then( movies => {
      const data = {
        title: "Movies",
        movies: movies
      };
      res.render("movies/index", data);
    })
    .catch( err => console.log(err))
})

/* CRUD Create new element */

//GET
router.get('/new', (req,res) => {
  res.render('movies/new')
})

//POST
router.post('/', (req,res) => {

  const {title, genre, plot} = req.body;
  const movie = new Movies({ title, genre, plot });
  movie.save()
    .then( () => {
      res.redirect('/movies')
    })
    .catch(err => console.log(err))
})

/* CRUD Update element */
router.get('/:id/edit', (req,res) => {
  Movies.findById(req.params.id)
    .then( (movie) => {
      console.log(movie)
      res.render('movies/edit', movie)
    })
    .catch(err => console.log(err))
})

router.post('/:id', (req, res) => {

  const {title, genre, plot} = req.body;
  
  Movies.findByIdAndUpdate(req.params.id, {
    title,
    genre,
    plot
  })
    .then( (movie) => {
      res.redirect('/movies')
      console.log(`${movie.title} successfully updated`);
    })
    .catch( err => console.log(err))
})

/* CRUD Delete element */
router.post('/:id/delete', (req, res) => {
  
  Movies.findByIdAndRemove(req.params.id)
    .then( () => res.redirect('/movies'))
    .catch(err => console.log(err))
})

/* CRUD Retrieve element by ID */

router.get('/:id', (req,res) => {

  movieId = req.params.id;

  Movies.findById(movieId)
    .then( movie => {

      const data = {
        title: movie.name,
        movie: movie
      };
      res.render('movies/show', data)
    })
    .catch(err => console.log(err))
})

module.exports = router;