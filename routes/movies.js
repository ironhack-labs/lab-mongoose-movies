const express = require('express');
const router  = express.Router();
const Movies = require('../models/Movies.model');

/* GET Movies list */
router.get('/movies', (req, res, next) => {
    Movies.find()
      .then(moviesFromDB => {
        console.log('Movies from DB: ========', moviesFromDB);
        res.render('movies-views/index', {moviesFromDB});
      })
      .catch(err => console.log(`Error while pulling movies from DB: ${err}`));
});

/* GET Add new celebrity form */
router.get('/movies/new', (req, res, next) => {
    res.render('movies-views/new')
});

/* GET Celebrity details */
router.get('/movies/:id', (req, res, next) => {
    Movies.findById(req.params.id)
      .then(moviesFromDB => {
        console.log('Movie from DB: ========', moviesFromDB);
        res.render('movies-views/show', moviesFromDB);
      })
      .catch(err => console.log(`Error while pulling celebrity details from DB: ${err}`));
});

/* GET Retrieve celebrity details */
router.get('/movies/:id/edit', (req, res, next) => {
    console.log("The form info: ", req.params.id);
    Movies.findById(req.params.id)
    .populate('movie')
    .then(movie => {
        res.render('movies-views/edit', movie)
    })
    .catch(err => {
        console.log(`Error while pulling movie details from DB: ${err}`);
    });
});

/* POST Add new celebrity to database */
router.post('/movies', (req, res, next) => {
    console.log("The form info: ", req.body);
    Movies.create(req.body)
    .then(moviesFromDB => {
        console.log("New movie added to the list:", {moviesFromDB})
        res.redirect('/movies');
    })
    .catch(err => {
        console.log(`Error while adding movie to DB: ${err}`);
        res.render('movies-views/new')

    });
});

/* POST Remove movie from database */
router.post('/movies/:id/delete', (req, res, next) => {
    console.log("The form info: ", req.params.id);
    Movies.findByIdAndRemove(req.params.id)
    .then(() => {
        res.redirect('/movies');
    })
    .catch(err => {
        console.log(`Error while removing movie from DB: ${err}`);
    });
});

/* POST Update movie on database */
router.post('/movies/:id/update', (req, res, next) => {
    console.log("The form info: ", req.body);
    Movies.findByIdAndUpdate({_id: req.params.id}, req.body)
    .then(() => {
      res.redirect('/movies');
    })
    .catch(err => {
        console.log(`Error while updating movie's details on DB: ${err}`)
    });
});

module.exports = router;