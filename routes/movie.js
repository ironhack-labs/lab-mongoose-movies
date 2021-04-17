const express = require("express");
const router = express.Router();

const Movie = require("../models/Movie");

router.get("/movies", (req, res, next) => {
  Movie.find()
    .then((allTheMovies) => {
      console.log("Retrieved movies from DB: ", allTheMovies);
      res.render("movies/index", { movies: allTheMovies });
    })
    .catch((error) => {
      console.log("Error while getting the movies from the DB: ", error);
      next(error);
    });
});

router.get("/movies/new", (req, res, next) => {
  res.render("movies/new");
});

router.get("/movies/:id", (req, res) => {
  const { id } = req.params;

  Movie.findById(id)
    //   Movie.find({ _id: id }) same as above
    .then((theMovie) => res.render("movies/show", { movie: theMovie }))
    .catch((error) => {
      console.log("Error while retrieving celebrity details: ", error);
      next(error);
    });
});

router.post("/movies", (req, res, next) => {
  Movie.create(req.body)
    .then(() => {
      res.redirect("/movies");
    })
    .catch((error) => {
      next(error);
    });
});

router.post("/movies/:id/delete", (req, res, next) => {
  Movie.findByIdAndRemove(req.params.id)
    .then(() => {
      res.redirect("/movies");
    })
    .catch((error) => {
      next(error);
    });
});

router.get("/movies/:id/edit", (req, res, next) => {
  Movie.findById(req.params.id)
    .then((movieFromDB) => {
      res.render("movies/edit", movieFromDB);
    })
    .catch((error) => {
      next(error);
    });
});

router.post("/movies/:id/edit", (req, res, next) => {
  Movie.findByIdAndUpdate(req.params.id, req.body)
    .then((response) => {
      console.log("response", response);
      res.redirect("/movies");
    })
    .catch((error) => {
      next(error);
    });
});

module.exports = router;
