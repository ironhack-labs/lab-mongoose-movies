const express = require('express');
const MovieModel = require('../models/movie');

const movieRouter = express.Router();

// display all movies
movieRouter.get('/movies', (req, res, next) => {
  MovieModel.find()
    .then((movieObj) => {
      res.render('./movies/index', { movieObj });
    })
    .catch(err => console.log(err));
});

// display movie info
movieRouter.get('/movies/:id', (req, res, next) => {
  const movieID = req.params.id;
  MovieModel.findById(movieID)
    .then((movieInfo) => {
      console.log(movieInfo);
      res.render('./movies/movie-info', movieInfo);
    })
    .catch(err => console.log(err));
});

// add a movie
movieRouter.get('/add-movie', (req, res) => {
  res.render('./movies/add-movie');
});

movieRouter.post('/movies', (req, res, next) => {
  const { title, genre, plot } = req.body; // getting the values from the post form and passing it to the object
  const newMovie = new MovieModel({ title, genre, plot }); // creating a new movie using the schema and passing the info

  newMovie.save()
    .then(addedMovie => res.redirect('/movies')) // after adding the movie, redirects back to all the movies (should see added movie)
    .catch((err) => {
      console.log(err);
      res.render('/add-movie'); // in case of error such as not filling everything out, refreshes the page to try again
    });
});

// delete a movie
movieRouter.post('/movies/:id/delete', (req, res, next) => {
  const movieID = req.params.id;

  MovieModel.findByIdAndRemove(movieID)
    .then(() => {
      console.log('movie was successfully deleted');
      res.redirect('/movies');
    })
    .catch((err) => {
      console.log(err);
      res.render('./movies/movie-info');
    });
});

// edit a movie
movieRouter.get('/movies/:id/edit-movie', (req, res, next) => {
  const movieID = req.params.id;
  MovieModel.findById(movieID)
    .then((movieObj) => {
      console.log('I WORKED');
      res.render('./movies/edit-movie', { movieObj });
    })
    .catch(err => console.log(err));
});

movieRouter.post('/movies/:id', (req, res, next) => {
  const movieID = req.params.id;
  const { title, genre, plot } = req.body;

  MovieModel.update({ _id: movieID }, { $set: { title, genre, plot } })
    .then((editedMovie) => {
      console.log('movie was successfully updated');
      res.redirect('/movies');
    })
    .catch((err) => {
      console.log(err);
      res.render('./movies/edit-celeb');
    });
});

module.exports = movieRouter;
