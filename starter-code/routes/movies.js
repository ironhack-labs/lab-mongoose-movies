const express = require("express");
const router  = express.Router();
const Movie = require("../models/movie")

router.get("/movies", (req, res, next) => {
  Movie.find({})
  .then((dbResult) => {
    res.render("movies/index.hbs", {
      movies: dbResult
    });
  })
  .catch((err) => {
    res.render("error.hbs")
  });
});

router.get("/movies/:id", (req, res, next) => {
  Movie.findById(req.params.id)
  .then((dbResult) => {
      console.log(dbResult)
    res.render("movies/details.hbs", {
        movies: dbResult,
    });
  })
  .catch((err) => {
    res.render("error.hbs", {
      message: err.message,
    })
  });
});

// Create - render the form

router.get('/movies/new', (req, res, next) => {
  res.render('movies/new.hbs');
});


// Create - submit the form

router.post("/movies", (req, res, next) => {
  const {
    title,
    genre,
    plot
  } = req.body;
  const newMovie = new Movie({
    title,
    genre,
    plot
  })
  Movie.save()
    .then((dbResult) => {
      res.redirect("/movies");
    })
    .catch((err) => {
      res.render('/movies/new');
    })
});

// Delete
router.post("movies/:id/delete", (req, res, next) => {
  Movie.findByIdAndRemove(req.params.id)
    .then((dbResult) => {
      res.redirect("/movies")
    })
    .catch((err) => {
      res.render("error.hbs", {
        message: err.message,
      })
    })
})






module.exports = router;