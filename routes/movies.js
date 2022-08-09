const express = require("express");
const celebrityModel = require("../models/locations.model");
const router = express.Router();
const Movie = require("../models/movie.model");

/* GET list */
router.get("/movies", (req, res, next) => {
  // Iteration #2: List the movies
  Movie.find().then((result) => {
    console.log("results", result);
    res.render("movies/listMovies.hbs", { listOfMovies: result });
    // res.send(result)
  });
});

router.get("/movies/:theID/edit", (req, res, next) => {
  // Iteration #4: Update the Movie
  Movie.findById(req.params.theID).then((oneCeleb) => {
    res.render("./movies/updateMovie-form.hbs", { oneCeleb: oneCeleb });
  });
});

router.post("/movies/:theID/edit", (req, res, next) => {
  // Iteration #4: Update the Movie
  console.log(req.body);
  Movie.findByIdAndUpdate(req.params.theID, { title: req.body.title, genre: req.body.genre, plot: req.body.plot, cast: req.body.cast }).then(() => {
    res.redirect("/movies");
  });
});

router.get("/movies/create", (req, res, next) => {
  // Iteration #3: Add a new Movie
  celebrityModel.find().then((celebArray) => { 
    res.render("./movies/addMovie-form.hbs", { celebArray: celebArray});
  });
  
});

router.post("/movies/create", (req, res, next) => {
  // Iteration #3: Add a new Movie
  console.log(req.body);
  Movie.create({ title: req.body.title, genre: req.body.genre, plot: req.body.plot, cast: [req.body.cast] }).then(() => {
    res.redirect("/movies");
  });
});

router.get("/movies/:theID", (req, res) => {
  req.params.theID; // ==> 61052265119dbf8593258766

  Movie.findById(req.params.theID).populate('name')
  .then((oneMovie) => {
    // console.log('Retrieved film from DB:', oneFilm)
    res.render("movies/movieDetails.hbs", { oneMovie: oneMovie });
    // res.send(oneFilm)
  });
});

router.post("/movies/:theID/delete", (req, res, next) => {
  // Iteration #5: Delete the Movie
  Movie.findByIdAndDelete(req.params.theID).then(() => {
    res.redirect("/movies");
  });
});

module.exports = router;
