const express = require('express');
const router = express.Router();
const movies = require("../models/movie");

/* GET movies */
router.get('/', (req, res, next) => {
  movies.find()
    .then(allTheMovies => {
      console.log('Retrieved movies from DB:', allTheMovies);
      res.render("movies/index", {
        movies: allTheMovies
      });
    })
    .catch(error => {
      console.log('Error while getting the movies from the DB: ', error);
    })
});

// Page to create new movie
router.get("/new", (req, res, next) => {
  res.render("movies/new");
});

// Send info to create new movie
router.post('/new', (req, res, next) => {
  const {
    title,
    genre,
    plot
  } = req.body;
  const newMovie = new movies({
    title,
    genre,
    plot
  })
  newMovie.save()
    .then((movies) => {
      res.redirect('/');
    })
    .catch((error) => {
      console.log('Error while creating new movie');
      res.render("movies/new");
    })
});

// Detail page of movie ID
router.get("/:id", (req, res, next) => {
  movies.findOne({
      '_id': req.params.id
    })
    .then(theMovie => {
      res.render('movies/show', {
        movie: theMovie
      });
    })
    .catch(error => {
      console.log('Error while retrieving movie ID: ', error);
    })
});

// Edit page for a movie ID
router.get("/:id/edit", (req, res, next) => {
  movies.findOne({
      '_id': req.params.id
    })
    .then(theMovie => {
      res.render('movies/edit', {
        theMovie
      });
    })
    .catch(error => {
      console.log('Error trying to edit the movie: ', error);
    })
});

// Send the updates after edit
router.post("/:id/edit", (req, res, next) => {
  const {
    title,
    genre,
    plot
  } = req.body;
  movies.findOneAndUpdate({
      "_id": req.params.id
    }, {
      $set: {
        title,
        genre,
        plot
      }
    })
    .then((movie) => {
      res.redirect('/movies');
    })
    .catch((error) => {
      console.log(error);
    })
});

// Send delete action
router.post("/:id/delete", (req, res, next) => {
  movies.findOneAndRemove({
      '_id': req.params.id
    })
    .then(res.redirect("/movies"))
    .catch(error => {
      console.log('Error while deleting movie: ', error);
    })
});

module.exports = router;