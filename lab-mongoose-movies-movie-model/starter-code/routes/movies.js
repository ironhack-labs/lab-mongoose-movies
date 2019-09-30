const express = require('express');
const router  = express.Router();
const Movie = require('../models/movies.js');


router.get('/movies', (req, res, next) => {
   Movie.find()
      .then(allMovies => {
          res.render('movies', { movies: allMovies });
    })
    .catch(error => {
        throw new Error(error);
      })
  });

  router.get('/movies/:movieId', (req, res, next) => {
    const id = req.params.movieId;
    Movie.findById(id)
    .then(idMovies => {
        res.render('show', { movies: idMovies })
    })
    .catch(error => {
      throw new Error(error);
    })
})

router.get('/new', (req, res, next) => {
    res.render('new');
} )

router.post('/movies', (req, res, next) => {
    Movie.create(req.body)
    .then(() => {
        res.redirect('/movies');
    })
    .catch((error) => {
        throw new Error(error);
})
})

router.post('/movies/:id/delete', (req, res, next) => {
      Movie.findByIdAndRemove(req.params.id)
      .then(() => {
          res.redirect('/movies')
      })
      .catch((error) => {
        throw new Error(error);
      })
  })

  router.get('/movies/:id/edit', (req, res, next) => {
    const editId = req.params.id;
    Movie.findById(editId)
    .then((moviesEdit) => {
        res.render('edit', { moviesEdit })
    })
    .catch((error) => {
        throw new Error(error);
    })
  })

  router.post('/movies/:id/edit', (req, res, next) => {
      const nId = req.params.id
      Movie.findByIdAndUpdate( nId, req.body)
      .then(() => {
        res.redirect('/movies');
      })
      .catch((error) => {
        throw new Error(error);
      })
    });


module.exports = router;