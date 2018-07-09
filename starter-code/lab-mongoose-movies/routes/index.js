const express = require("express");
const router = express.Router();
const Celebritie = require("../models/celebritie");
const Movie = require("../models/movie");

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

// CELEBRITIES STAFF //
//-----------------------------------------------//
/* List all celebrities */
router.get("/celebrities", (req, res, next) => {
  Celebritie.find({}).then(celebrities => {
    res.render("celebs", { celebrities });
  });
});

/* Celebritie add new form */
router.get("/celebrities/new", (req, res, next) => {
  res.render("new");
});

/* Adding new celebritie */
router.post("/celebrities/new", (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body;
  const newCelebritie = new Celebritie({ name, occupation, catchPhrase });
  newCelebritie
    .save()
    .then(celebritie => {
      console.log("New celeb sucessfully created!");
      res.redirect("/celebrities");
    })
    .catch(error => {
      res.redirect("new");
    });
});

/* Update celebritie form */
router.get("/celebrities/edit/:id", (req, res) => {
  Celebritie.findById(req.params.id).then(celebritie => {
    res.render("edit", { celebritie });
  });
});

/* Updating celebritie in DB */
router.post("/celebrities/edit/:id", (req, res) => {
  const { name, occupation, catchPhrase } = req.body;
  Celebritie.findByIdAndUpdate(req.params.id, {
    name,
    occupation,
    catchPhrase
  }).then(celebritie => {
    res.redirect("/celebrities");
  });
});

/* Remove a celebritie */
router.get("/celebrities/delete/:id", (req, res, next) => {
  Celebritie.findByIdAndRemove(req.params.id, () =>
    res.redirect("/celebrities")
  );
});

/* Celebritie details */
router.get("/celebrities/:id", (req, res, next) => {
  Celebritie.findById(req.params.id).then(celebritie => {
    res.render("show", { celebritie });
  });
});

//---------- END OF CELEBRITIES STAFF-------------------//

//MOVIES STAFF//
//------------------------------------------------------//

//List of all movies//
router.get("/movies", (req, res, next) => {
  Movie.find({}).then(movies => {
    res.render("movies", { movies });
  });
});

/* Movie add new form */
router.get("/movies/new", (req, res, next) => {
  res.render("newMovie");
});

/* Adding new movie */
router.post("/movies/new", (req, res, next) => {
  const { title, genre, plot } = req.body;
  const newMovie = new Movie({ title, genre, plot });
  newMovie
    .save()
    .then(movie => {
      console.log("New movie sucessfully created!");
      res.redirect("/movies");
    })
    .catch(error => {
      res.redirect("newMovie");
    });
});

/* Remove a movie */
router.get("/movies/delete/:id", (req, res, next) => {
  Movie.findByIdAndRemove(req.params.id, () =>
    res.redirect("/movies")
  );
});

/* Movie details */
router.get("/movies/:id", (req, res, next) => {
  Movie.findById(req.params.id).then(movie => {
    res.render("showMovies", { movie });
  });
});

/* Update movie form */
router.get("/movies/edit/:id", (req, res) => {
  Movie.findById(req.params.id).then(movie => {
    res.render("editMovie", { movie });
  });
});

/* Updating movie in DB */
router.post("/movies/edit/:id", (req, res) => {
  const { title, genre, plot } = req.body;
  Movie.findByIdAndUpdate(req.params.id, { title, genre, plot }).then(movie => {
    res.redirect("/movies");
  });
});

module.exports = router;
