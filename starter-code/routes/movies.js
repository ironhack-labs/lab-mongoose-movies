const express = require("express");
const router = new express.Router();
const Movies = require("../models/movies");

// Get all movies
router.get("/movies", (req, res) => {
  Movies.find({})
    .then((dbResult) => {
      res.render("movies/index", {
        movies: dbResult,
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

// Create a new movie
router.get("/movies/new", (req, res) => {
  res.render("movies/new.hbs", {
    error: req.flash("error"),
  });
});

router.post("/movies", (req, res) => {
  if (req.body.title === "" || req.body.genre === "" || req.body.plot === "") {
    req.flash("error", "You must fill all the fields!");
    res.redirect("/movies/new");
  } else {
    Movies.create(req.body)
      .then((dbResult) => {
        res.redirect("/movies");
      })
      .catch((err) => {
        console.log(err);
      });
  }
});

// View a movie
router.get("/movies/:id", (req, res) => {
  Movies.findById(req.params.id)
    .then((dbResult) => {
      res.render("movies/show", {
        movies: dbResult,
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

// Delete Movies
router.post("/movies/:id/delete", (req, res, next) => {
  Movies.findByIdAndRemove(req.params.id)
    .then((dbResult) => {
      res.redirect("/movies");
    })
    .catch((err) => {
      console.log(err);
    });
});

// Update Movies
router.get("/movies/:id/edit", (req, res) => {
  Movies.findById(req.params.id)
    .then((dbResult) => {
      res.render("movies/edit.hbs", {
        movies: dbResult,
        error: req.flash("error"),
      });
    })
    .catch((dbErr) => {
      console.log(dbErr);
    });
});

router.post("/movies/:id", (req, res) => {
  if (req.body.title === "" || req.body.genre === "" || req.body.plot === "") {
    req.flash("error", "You need to fill all the fields..");
    res.redirect(`/movies/${req.params.id}/edit`);
  } else {
    Movies.findByIdAndUpdate(req.params.id, req.body, { new: true })
      .then((dbResult) => {
        res.redirect("/movies");
      })
      .catch((dbErr) => {
        console.log(dbErr);
      });
  }
});

module.exports = router;
