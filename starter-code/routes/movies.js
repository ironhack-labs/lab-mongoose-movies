const express = require('express');
const router  = express.Router();

const Movie = require("../models/movie.js");


router.get('/', (req, res, next) => {
    Movie.find()
    .then(allMovies => {
        console.log(allMovies);
      res.render('movies/index', { movies: allMovies });
    })
    .catch(error => {
      console.log('Error while getting the movies from the DB: ', error);
    });
});


router.get("/new", (req, res, next) => {
  res.render('movies/new');
});

router.post("/new", (req, res, next) => {
  const {title, genre, plot} = req.body;
  const newMovie = new Movie({title, genre, plot});
  newMovie.save().then(movie => res.redirect("/movies")).catch(err => console.log(err));
});

router.get('/:id/delete', (req, res, next) => {
    Movie.findByIdAndRemove(req.params.id)
  .then(movie => {
    res.redirect("/movies");
  })
  .catch((error) => {
    console.log(error);
  });
});

router.get('/:id/edit', (req, res, next) => {
    Movie.findById(req.params.id)
  .then(movie => {
    res.render('movies/edit', movie);
  })
  .catch((error) => {
    console.log(error);
  });
});

router.post('/:id/edit', (req, res, next) => {
  const { title, genre, plot } = req.body;
  Movie.update({_id: req.params.id}, { $set: { title, genre, plot }}, {new: true})
  .then(movie => {
    res.redirect('/movies');
  })
  .catch((error) => {
    console.log(error);
  });
});

router.get('/:id', (req, res, next) => {
  Movie.findById(req.params.id)
    .then(movie => {
      res.render('movies/show', movie);
    })
    .catch(error => {
      console.log('Error while getting the movies from the DB: ', error);
    });
});



module.exports = router;