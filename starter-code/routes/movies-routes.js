const express = require("express");
const router = express.Router();

const Movie = require("../models/Movie.model");
const Celebrity = require("../models/Celebrity.model");

// Iteration 5 Adding New Movies
router.get("/movies/new", (req, res, next) => {
  res.render("movies/new-movie");
});

router.post("/movies/create", (req, res, next) => {
  Movie.create(req.body)
    .then(newMovie => {
      console.log(newMovie);
      res.redirect("/movies");
    })
    .catch(err =>
      console.log(`An error has occured when adding a movie to the DB: ${err}`)
    );
});

// Iteration 9 Editing movies
router.get("/movies/:id/edit", (req, res, next) => {
  Movie.findById(req.params.id)
    .populate("cast")
    .then(movie => {
      Celebrity.find()
        .then(availableCelebrities => {
          const newAvailableCelebrities = availableCelebrities.filter(
            oneCelebrity => {
              const castArr = movie.cast;
              for (let i = 0; i < castArr.length; i++) {
                if (oneCelebrity._id.equals(movie.cast[i]._id)) {
                  return false;
                }
              }
              return true;
            }
          );
          res.render("movies/edit-movie", { movie, newAvailableCelebrities });
        })
        .catch(error => console.log(error));
    })
    .catch(error => {
      console.log(error);
    });
});

router.post("/movies/:id", (req, res, next) => {
  Movie.findByIdAndUpdate(req.params.id, { $set: req.body })
    .then(updatedMovie => {
      console.log(updatedMovie);
      res.redirect("/movies");
    })
    .catch(err => console.log(`An error occured when editing a movie: ${err}`));
});

// Iteration 7 Movie details page
router.get("/movies/:id", (req, res, next) => {
  Movie.findById(req.params.id)
    .populate("cast")
    .then(theMovie => {
      console.log(`The movie: ${theMovie}`);
      res.render("movies/movie-details", { movie: theMovie });
    })
    .catch(err =>
      console.log(
        `An error has occured when getting the movie details page: ${err}`
      )
    );
});

// Iteration 8 Delete a movie
router.post("/movies/:id/delete", (req, res, next) => {
  Movie.findByIdAndRemove(req.params.id)
    .then(deletedMovie => {
      console.log(`The deleted movie: ${deletedMovie}`);
      res.redirect("/movies");
    })
    .catch(err =>
      console.log(`An error has occured when deleting a movie: ${err}`)
    );
});

// Iteration 6 Listing the movies
router.get("/movies", (req, res, next) => {
  Movie.find()
    .then(moviesFromDB => {
      console.log(`Movies from the DB: ${moviesFromDB}`);
      res.render("movies/movies", { movies: moviesFromDB });
    })
    .catch(err =>
      console.log(
        `An error has occured when getting the movies from the DB: ${err}`
      )
    );
});

module.exports = router;
