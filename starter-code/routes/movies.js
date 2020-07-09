const express = require("express");
const router = new express.Router();
const movieModel = require("../models/movies");

router.get("/movies", (req, res, next) => {
    movieModel
      .find() 
      .then(movies => {
        res.render("movies/index", {movies});
      })
      .catch(next);
  });

  router.get("/movies/new", (req, res) => {
    res.render("movies/new");
});

router.post("/movies", (req,res) => {
    const {title, genre, plot} = req.body;
    movieModel
    .create({title, genre, plot})
    .then(() => {
      res.redirect("/movies");
    })
    .catch(res.redirect("movies/new"));
  })

  router.post("/movies/:id/delete", (req, res, next) => {
    movieModel
      .findByIdAndDelete(req.params.id)
      .then(dbRes => {
        res.redirect("/movies");
    })
      .catch(next);
  });

  module.exports = router;

  router.get("/movies/:id", (req, res, next) => {
    movieModel
      .findById(req.params.id) 
      .then(movies => {
        res.render("movies/show", {movies});
      })
      .catch(next);
  });



