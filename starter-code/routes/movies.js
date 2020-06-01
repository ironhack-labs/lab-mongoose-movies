const express = require("express");
const router = express.Router();
const Movies = require("../models/movies");

//Movies List
router.get("/", (req, res, next) => {
  Movies.find()
    .then((movie) => {
      res.render("movies/index", { list: movie });
    })
    .catch((err) => {
      console.log("Error when get Movies list", err);
      next();
    });
});
//DELETE Movie
router.post("/:id/delete", (req, res, next) => {
  Movies.findByIdAndRemove(req.params.id)
    .then(() => {
      res.redirect("/movies");
    })
    .catch((err) => {
      console.log("An error has ocurred while delete movie", err);
      next();
    });
});

//EDIT Movie (GET & POST)
router.get("/:id/edit", (req, res, next) => {
  Movies.findById(req.params.id)
    .then((movie) => res.render("movies/edit", movie))
    .catch((err) => {
      console.log("An error has occurred while charge the edit route", err);
      next();
    });
});
router.post("/:id", (req, res, next) => {
  const { title, genre, plot } = req.body;
  Movies.update({ _id: req.params.id }, { $set: { title, genre, plot } })
    .then(() => res.redirect("/movies"))
    .catch((err) => {
      console.log("Error has occurred while save the new data", err);
      next();
    });
});

//GET movie info
router.get("/:id", (req, res, next) => {
  Movies.findById(req.params.id)
    .then((movie) => {
      res.render("movies/show", movie);
    })
    .catch((err) => {
      console.log("An error has occurred while charge the movie info", err);
      next();
    });
});

// ADD Movie ( GET & POST)
router.get("/new", (req, res, next) => {
  res.render("movies/new");
});
router.post("/new", (req, res, next) => {
  //Get data from req.body
  const { title, genre, plot } = req.body;
  //New instance of Movie with data catched
  const newMovie = new Movies({
    title,
    genre,
    plot,
  });
  //Add to DB and redirect to Movies List
  newMovie
    .save()
    .then(res.redirect("/movies"))
    .catch((err) => {
      console.log("An error has occurred while add a new movie");
      next();
    });
});

module.exports = router;
