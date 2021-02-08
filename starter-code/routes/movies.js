const express = require("express");
const moviesRouter = express.Router();
const Movies = require("../models/movies.js");

// ROUTES

moviesRouter.get("/", (req, res, next) => {
  Movies.find()
    .then((allMovies) => {
      console.log("retrieving movies");
      const data = { allMovies: allMovies };

      res.render("movies/index", data);
    })
    .catch((err) => next());
});

moviesRouter.get("/:id", (req, res, next) => {
  const { id } = req.params;

  Movies.findById(id)
    .then((oneMovie) => {
      console.log("Found one movie!");
      const data = { oneMovie: oneMovie };

      res.render("movies/show", data);
    })
    .catch((err) => {
      console.log("There's an error", err);
      next();
    });
});

// CREATE NEW MOVIE
moviesRouter.get("/new", (req, res, next) => {
  res.render("movies/new");
  console.log("you add a new movie");
});
moviesRouter.post("/", (req, res, next) => {
  const { title, genre, plot } = req.body;

  Movies.create({ title, genre, plot })
    .then((data) => {
      console.log("It worked!!!");
      res.redirect("movies");
    })
    .catch((err) => {
      res.render("movies/new");
    });
});

moviesRouter.post("/:id/delete", (req, res, next) => {
  const { id } = req.params;

  Movies.findByIdAndRemove(id)
    .then((data) => res.redirect("/movies"))
    .catch((err) => {
      console.log("There's an error with finding & deleting one celebrity");
      next();
    });
});

// UPDATE
moviesRouter.get("/:id/edit", (req, res, next) => {
  const { id } = req.params;

  Movies.findById(id)
    .then((updateMovie) => {
      const data = { updateMovie: updateMovie };
      res.render("movies/edit", data);
      console.log("fill the form");
    })
    .catch((err) => {
      console.log("There's an error with finding & deleting one celebrity");
      next();
    });
});
moviesRouter.post("/:id", (req, res, next) => {
  const { id } = req.params;
  const { title, genre, plot } = req.body;
  console.log("we are here");

  Movies.findByIdAndUpdate(id, { title, genre, plot })
    .then((data) => res.redirect("/movies"))
    .catch((err) => {
      console.log("There's an error with updating one celebrity");
      next();
    });
});

module.exports = moviesRouter;

// const {title, description} = req.body;
