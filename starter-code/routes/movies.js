const express = require("express");
const moviesRouter = express.Router();
const Movie = require("./../models/movies-model");

moviesRouter.get("/", (req, res, next) => {
  Movie.find()
    .then((allMovies) => {
      const data = {
        allMovies: allMovies,
      };
      console.log(allMovies);

      res.render("movies/index", data);
    })

    .catch((error) => {
      next();
      return error;
    });
});

moviesRouter.get("/:movieID", (req, res, next) => {
  const movieID = req.params.movieID;

  Movie.findById(movieID)
    .then((found) => {
      const data = {
        found: found,
      };

      res.render("movies/show", data);
    })

    .catch((error) => {
      next();
      return error;
    });
});

moviesRouter.get("/new", (req, res, next) => {
  res.render("movies/new");
});

moviesRouter.post("/", (req, res, next) => {
  const { title, genre, plot} = req.body;
  Movie.create({ title, genre, plot})
    .then((created) => {
      res.redirect("/movies");
    })
    .catch((err) => console.log(err));
});

moviesRouter.post("/:movieID/delete", (req, res, next) => {
  const movieID = req.params.movieID;

Movie.findByIdAndDelete(movieID)
    .then((deleted) => {
      res.redirect("/movies");
    })
    .catch((err) => console.log(err));
});


module.exports = moviesRouter;
