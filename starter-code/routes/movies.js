const express = require('express');
const router  = express.Router();
const Movie = require('../models/Movie');
const Celebrity = require('../models/Celebrity');




router.get('/movies', (req, res, next) => {
  Movie
      .find()
      .then(allMovies => res.render('movies/movies',{allMovies}))
      .catch(err => console.log('Error while searching movies'));
});


router.get('/movies/new', (req, res, next) => {
Celebrity
        .find()
        .then(celebrities => res.render('movies/new-movie',{celebrities}))
        .catch(err => console.log('Error while retrieving cast',err));
});


router.post('/movies/create', (req, res, next) => {
  Movie
      .create(req.body)
      .then(res.redirect('/movies'))
      .catch(err => {
        console.log('Error while creating new movie',err)
        res.render('movies/new-movie')
      });          
});


router.get('/movies/:id', (req, res, next) => {
  Movie 
      .findById(req.params.id)
      .populate('cast')
      .then(movie => res.render('movies/movie-details',{movie}))
      .catch(err => console.log('Error while retrieving movie details: ',err));
});

router.post('/movies/:id/delete', (req, res, next) => {
  Movie
        .findByIdAndRemove(req.params.id)
        .then(res.redirect('/movies'))
        .catch(err => console.log('Error while deleteting movie',err));
});

router.get('/movies/:id/edit', (req, res, next) => {
  Movie
      .findById(req.params.id)
      .then(movie => {
        Celebrity
                  .find()
                  .then(celebrities => {
                    celebrities.forEach(celebrity => {
                      movie.cast.forEach(member => {
                        if(member._id.equals(celebrity._id)){
                          celebrity.isActor = true;
                        }
                      });
                    });
                    res.render('movies/edit-movie',{movie,celebrities})
                  })
                  .catch(err => console.log('Error while retrieving celebrity',err));
      })
      .catch(err => console.log('Error while retrieving movie',err));
});

router.post('/movies/:id', (req, res, next) => {
  Movie
      .findByIdAndUpdate(req.params.id,req.body)
      .then(res.redirect(`/movies`))
      .catch(err => {
        res.redirect(`/movies/${req.params.id}`)
        console.log('Error while updating movie',err)
      });
});




module.exports = router;