const express = require('express');
const router  = express.Router();
const movieModel = require("../models/Movie");

router.get("/movies", (req, res) => {
    movieModel
    .find()
    .then(dbResults => {
        res.render("movies-index", {
            movies: dbResults
        });
    })
    .catch(dbErr => {
        console.log("OH NO ! Database error", dbErr);
    });
});

router.get("/movies/show/:id", (req, res) => {
    movieModel
      .findById(req.params.id)
      .then(movie => {
        res.render("movie-show", { movie });
      })
      .catch(dbErr => console.error("OH no, db err :", dbErr));
  });

  router.get("/movies/new", (req, res) => {
    res.render("movie-new");
  });

  
  router.post("/movies/new", (req, res) => {
    const { title, genre, plot } = req.body;
    movieModel
      .create({
        title,
        genre,
        plot
      })
      .then(dbRes => res.redirect("/movies"))
      .catch(dbErr => {
        console.log(dbErr);
        res.render("movie-new");
      });
  });

  router.get("/movies/delete/:id", (req, res) => {
    movieModel
      .findByIdAndDelete(req.params.id)
      .then(dbRes => {
        res.redirect("/movies");
      })
      .catch(dbErr => {
        console.error(dbErr);
      });
  });

  router.get("/movies/edit/:id", (req, res) => {
    movieModel
      .findById(req.params.id)
      .then(dbRes => {
        res.render("form-movies-edit", { movie: dbRes });
      })
      .catch(dbErr => console.error(dbErr));
  });
  
  router.post("/movies/edit/:id", (req, res) => {
    const { title, genre, plot } = req.body;
    movieModel.findByIdAndUpdate(req.params.id, {
      title,
      genre,
      plot
    })
    .then(dbRes => {
      res.redirect("/movies");
    })
    .catch(dbErr => {
      console.error(dbErr)
    });
  });

module.exports = router;