const express = require('express');
const router  = express.Router();
const Celebrity = require('../models/Celebrity.model');
const Movies = require('../models/Movies.model');

/* GET Movies list */
router.get('/movies', (req, res, next) => {
    Movies.find().populate('cast')
      .then(moviesFromDB => {
        console.log('Movies from DB: ========', moviesFromDB);
        res.render('movies-views/index', {moviesFromDB});
      })
      .catch(err => console.log(`Error while pulling movies from DB: ${err}`));
});

/* GET Add new movie form */
router.get('/movies/new', (req, res, next) => {
    Celebrity.find()
    .then(celebritiesAvailable => {
        console.log("The celebrities available are: ", celebritiesAvailable)
        res.render('movies-views/new', {celebritiesAvailable})
    })
    .catch(err => console.log(`Error: ${err}`));
});

/* GET Movie details */
router.get('/movies/:id', (req, res, next) => {
    Movies.findById(req.params.id)
    .populate('cast')
    .then(moviesFromDB => {
        console.log('Movie from DB: ========', moviesFromDB);
        res.render('movies-views/show', moviesFromDB);
      })
    .catch(err => console.log(`Error while pulling movie details from DB: ${err}`));
});

/* GET Retrieve movie details */
router.get('/movies/:id/edit', (req, res) => {
    Movies.findById(req.params.id)
      .populate('cast')
      .then(movieFound => {
        Celebrity.find()
          .then(celebritiesAvailable => {  
            const almostAllCelebrities = celebritiesAvailable.filter(
              oneCelebrity => !oneCelebrity._id.equals(movieFound.cast._id)
            );
            console.log(almostAllCelebrities);
            res.render('movies-views/edit', {movieFound, almostAllCelebrities});
          })
          .catch(err => console.log(`Err while getting the celebrities from the DB for the update: ${err}`));
      })
      .catch(err => console.log(`Err while getting the movie from the DB for the update: ${err}`));
  });
  
 
/* POST Add new movie to database */
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
        Celebrity.find()
        res.redirect('/movies');
    })
    .catch(err => {
        console.log(`Error while updating movie's details on DB: ${err}`)
    });
});

module.exports = router;