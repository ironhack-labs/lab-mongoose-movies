var express = require('express');
var router = express.Router();

const Movie = require('../models/movie');

router.get('/', (req, res, next) => {
    Movie.find()
    .then(movie => {
        res.render('movies/index', {movie});
    })
    .catch(e => next(e));
});

router.get('/new', (req, res, next) =>{
    res.render('movies/new');
});

router.get('/:id', (req, res, next) => {
    Movie.findById(req.params.id)
      .then(movieId => {
        res.render('movies/movie-details', { movieId });
      })
      .catch(e => next(e));
  });

  router.post('/add', (req, res, next) => {
    const { title, genre, plot } = req.body;
    const newMovie = new Movie({ title, genre, plot})
    newMovie.save()
    .then((movie) => {
        console.log(`${movie} movie, added to our database!`)
        res.redirect('/movies');
    })
    .catch(e => next(e));
  });

  router.post("/:id/delete", (req, res, next) => {
    Movie.findByIdAndRemove(req.params.id)
      .then(() => res.redirect("/movies"))
      .catch(e => next(e));
  });

  router.get("/:id/edit", (req, res, next) => {
    Movie.findById(req.params.id)
      .then(movieEdit => {
        res.render("movies/edit", { movieEdit });
      })
      .catch(e => next(e));
  });

  router.post ('/:id', (req, res, next) => {
    const { title, genre, plot } = req.body;
    const { id} = req.params;
    Movie.update({_id : id},
        {$set: {title, genre, plot}})
        .then(() => {
        res.redirect('/movies');
        })
        .catch(next)
});

module.exports = router;