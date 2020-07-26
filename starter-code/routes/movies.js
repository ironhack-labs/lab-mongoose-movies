var express = require('express');
var router = express.Router();

const Movie = require('../models/movie');

router.get('/movies', async (req, res, next) => {
    try {
        let movies = Movie.find();
        await movies.map(movie => {
            console.log('Our movies: ', movie)
            res.render('movies/index', { movie: movie });
        }) 
    } catch (error) {
        console.log('Error while getting movies from DB: ', error);
    }
});

router.post('/movies', (req, res, next) => {
    const { title, genre, plot } = req.body;
    const newMovie = new Movie({ title, genre, plot })
    newMovie.save()
        .then((movie) => {
        res.redirect('/movies')
    })
        .catch((error) => {
        console.log(error)
        res.render('movies/new')
    })
})

router.get('/movies/new', (req, res, next) => {
    res.render('movies/new')
})

router.get('/movies/:movieId', (req, res, next) => {
    let movieId = req.params.movieId
    Movie.findOne({'_id': movieId})
    .populate('movie')
    .then(movie => {
      if (!movie) {
          return res.status(404).render('not-found');
      }
      res.render("movies/show", { movie: movie })
    })
    .catch(next)
})

router.get('/movies/:movieId/edit', (req, res, next) => {
    let movieId = req.params.movieId
    Movie.findOne({'_id': movieId})
    .then((movie) => {
        res.render('movies/edit', { movie: movie })
    })
    .catch((err) => {
        console.log(err)
        next(err)
    })
})

router.post('/movies/:movieId', (req, res, next) => {
    const { title, genre, plot } = req.body;
    let movieId = req.params.movieId;
    Movie.update(
      { _id: movieId },
      { $set: { title, genre, plot } },
      { new: true }
    )
      .then((movie) => {
        res.redirect("/movies");
      })
      .catch((error) => {
        console.log(error)
        next(error)
      });
})

router.post('/movies/:movieId/delete', (req, res, next) => {
    let movieId = req.params.movieId
    Movie.findByIdAndRemove({'_id': movieId})
    .then(() => {
        res.redirect('/movies')
    })
        .catch((error) => {
        console.log(error)
        return res.status(404).render('not-found');
    })
})

module.exports = router;