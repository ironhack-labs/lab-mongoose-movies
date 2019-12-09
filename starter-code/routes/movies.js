const express = require("express");
const router = express.Router();
const Movie = require("../Models/Movie");

// Base Celebrity route
router.get("/", (req, res, next) => {
  // Search for all of the celebrities
  Movie.find({})
    .then(data => {
      // With that data, render the index page
      res.render("movies/index", { movies: data });
    })
    .catch(err => {
      //  If an error is found, render the error page
      next(err);
    });
});

// Add a new Movie
router.get("/new", (req, res, next) => {
  // Search for all of the celebrities
  Movie.find({})
    .then(data => {
      // With that data, render the form for new movies
      res.render("movies/new", { movies: data });
    })
    .catch(err => {
      //  If an error is found, render the error page
      next(err);
    });
});

// Post to the database
router.post("/", (req, res, next) => {
  // Gather the data from the form
  let title = req.body.title;
  let genre = req.body.genre;
  let plot = req.body.plot;

  // Create the object
  Movie.create({
    title,
    genre,
    plot
  })
    .then(response => {
      // Send the user back to the movies page
      res.redirect("/movies");
    })
    .catch(err => {
      // Render the error
      next(err);
    });
});

// Delete from the database
router.post("/:id/delete", (req, res, next) => {
  // Delete the object
  Movie.findByIdAndRemove(req.params.id)
    .then(response => {
      // Send the user back to the movies page
      res.redirect("/movies");
    })
    .catch(err => {
      // Render the error
      next(err);
    });
});

// Edit a new Movie
router.get("/:id/edit", (req, res, next) => {
  // Search for all of the movies
  Movie.findById(req.params.id)
    .then(data => {
      // With that data, render the form to edit a celebrity
      res.render("movies/edit", { movie: data });
    })
    .catch(err => {
      //  If an error is found, render the error page
      next(err);
    });
});

// Update the database
router.post("/:id", (req, res, next) => {
  // Gather the data from the form
  let id = req.params.id;
  let update = { ...req.body };

  // Create the object
  Movie.findByIdAndUpdate(id, update, { new: true })
    .then(response => {
      // Send the user back to that movies page
      res.redirect("/movies/" + id);
    })
    .catch(err => {
      console.log(err);
      // Render the error
      next(err);
    });
});

// Movie Details
router.get("/:id", (req, res, next) => {
  // Search for all of the movies
  Movie.findById(req.params.id)
    .then(data => {
      // With that data, render the index page
      res.render("movies/show", { movie: data });
    })
    .catch(err => {
      //  If an error is found, render the error page
      next(err);
    });
});

module.exports = router;
