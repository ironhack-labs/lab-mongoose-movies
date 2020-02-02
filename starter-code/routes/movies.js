const express = require('express');
const router  = express.Router();
const movieModel = require("../models/Movie");

// = = = = = = =
// LIST MOVIES
// = = = = = = =
router.get("/movies/index", (req, res) => {
  movieModel.find()
  .then(movies => {
    res.render("movies/index", {movies});
  })
  .catch(err => {
    console.log(err);
  });
});

router.get("/movies/new", (req, res) => {
  res.render("movies/new");
});

// = = = = = = =
// CREATE MOVIE
// = = = = = = =
router.post("/movies/new", (req, res) => {
  const {name, genre, plot} = req.body;
  celebrityModel.create({
      name,
      genre,
      plot
  })
  .then(dbres => {
      res.redirect("/movies/index");
  })
  .catch(dberr => {
      console.error(dberr);
      res.send("Oops... Failed.");
  });
});

// = = = = = = =
// SHOW MOVIE
// = = = = = = =
router.get("/movies/show/:id", (req, res) => {
  movieModel.findById(req.params.id)
  .then(movie => {
    res.render("movies/show", {movie});
  })
  .catch(err => {
    console.error(err);
  });
});

// = = = = = = =
// DELETE MOVIE
// = = = = = = =
router.post("/movies/:id/delete", (req, res) => {
  movieModel.findByIdAndDelete(req.params.id)
  .then(dbres => {
    res.redirect("/movies/index");
  })
  .catch(err => {
    console.error(err);
  });
});

// = = = = = = =
// EDIT CELEB
// = = = = = = =
router.get("/movies/:id/edit", (req, res) => {
  movieModel.findById(req.params.id)
  .then(movie => {
    res.render("movies/edit", {movie});
  })
  .catch(err => {
    console.error(err);
  });
});

router.post("/movies/:id/", (req, res) => {
  const {name, genre, plot} = req.body;
  movieModel.findByIdAndUpdate(req.params.id, {
    name,
    genre,
    plot
  })
  .then(dbres => {
    res.redirect("/movies/index");
  })
  .catch(err => {
    console.error(err);
  });
});

module.exports = router;