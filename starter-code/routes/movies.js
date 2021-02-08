var express = require("express");
var moviesRouter = express.Router();
const Movie = require("./../models/movie");

// GET     /books
moviesRouter.get("/", (req, res, next) => {
  Movie.find()
    .then((allMovies) => {
      const data = {
        allMovies: allMovies,
      };
      res.render("movies/index", data);
    })
    .catch((err) => {
      console.log(err);
      next();
    });
});

moviesRouter.get("/:movieId", (req, res, next) => {
  Movie.findById(req.params.movieId)
    .then((foundMovie) => {
      const data = {
        foundMovie: foundMovie,
      };
      res.render("movies/show", data);
    })
    .catch((err) => {
      console.log(err);
      next();
    });
});

moviesRouter.get("/new", (req, res, next) => {
  res.render("movies/new");
});

moviesRouter.post("/", (req, res, next) => {
  const { title, genre, plot } = req.body;

  Movie.create({ title, genre, plot })
    .then(() => {      
      res.redirect("/movies");
    })
    .catch((err) => {
      console.log(err);
      res.redirect("/movies/new");
    });
});

moviesRouter.post("/:movieId/delete", (req, res, next) => {
  Movie.findByIdAndRemove(req.params.movieId)
    .then(() => {
      res.redirect("/movies");
    })
    .catch((err) => {
      console.log(err);
      next();
    });
});

moviesRouter.get("/:movieId/edit", (req, res, next) => {
  Movie.findById(req.params.movieId)
    .then((foundMovie) => {
      const data = {
        foundMovie: foundMovie,
      };
      res.render("movies/edit", data);
    })
    .catch((err) => {
      console.log(err);
      next();
    });
});

moviesRouter.post("/:movieId", (req, res, next) => {
  const { title, genre, plot } = req.body;
  Movie.findByIdAndUpdate(req.params.movieId, { title, genre, plot })
    .then(() => {
      console.log("Update");
      
      res.redirect("/movies");
    })
    .catch((err) => {
      console.log(err);
      next();
    });
});


module.exports = moviesRouter;