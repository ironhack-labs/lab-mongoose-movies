const express = require("express");
const router = express.Router();

const MovieModel = require("./../models/Movie");
const CelebrityModel = require("./../models/Celebrity");
const { route } = require("./celebrities");

// ITERATION 6
router.get("/movies", (req, res, next) => {
  MovieModel.find().populate("celebrities")     // Get the info from the Celebrity collection
  .then(dbRes => res.render("movies/movies", { movies: dbRes })) 
  .catch(next);
});


// ITERATION 5
router.get("/movies/new", (req, res, next) => {
  CelebrityModel.find()
  .then(dbRes => {
    res.render("movies/new-movie", { celebrities: dbRes });   // INSIDE THE THEN OR IT WON'T WOKR!!!!
  })
  .catch(next);
});

router.post("/movies/create", (req, res, next) => {
  const { 
    title,
    genre,
    plot,
    cast
  } = req.body;

  MovieModel.create({
    title, 
    genre, 
    plot, 
    cast
  })
  .then(res.redirect("/movies"))
  .catch(next);
});

// ITERATION 7
router.get("/movies/:id", (req, res, next) => {
  MovieModel.findById(req.params.id).populate("cast")
  .then(dbRes => {
    console.log(dbRes);
    res.render("movies/movie-details", { movie: dbRes })
  })
  .catch(next);
});

// ITERATION 8
router.post("/movies/:id/delete", (req, res, next) => {
  MovieModel.findByIdAndDelete(req.params.id)
  .then(() => res.redirect("/movies"))
  .catch(next);
})

// ITERATION 9
router.get("/celebrities/:id/edit", (req, res, next) => {
  MovieModel.findById(req.params.id)
  .populate("cast")
  .then(dbRes => {
    console.log(dbRes);
    res.render("movies/edit-movie", { movie: dbRes });
  })
  .catch(next);
});

router.post("/movies/:id", (req, res, next) => {
  const { title, genre, plot, cast } = req.body;
  MovieModel.findByIdAndUpdate(req.params.id, { title, genre, plot, cast }, { new: true })
  .then(updatedMovie => res.redirect(`/movies/${req.params.id}`))
  .catch(err => res.redirect("/movies"));
})


module.exports = router;