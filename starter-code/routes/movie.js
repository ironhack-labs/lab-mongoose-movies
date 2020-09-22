const express = require('express');
const router  = express.Router();
const Movie = require("../models/movie");

router.get('/', async (req, res, next) => {
  try {
    const movies = await Movie.find({})
    res.render("movies/index.hbs", { movies });
  } catch (error) {
    next(error);
  }
});

router.get('/new',  (req, res, next) => {
  res.render("movies/new.hbs");
});

router.post('/new', async (req, res, next) => {
try {
  const newMovie = req.body;
  const createdMovie= await Movie.create(newMovie);
  res.redirect("/movies");
} catch (error) {
  res.render("movies/new");
}
});

router.get('/:id', async (req, res, next) => {
  try {
    const movie = await Movie.findById(req.params.id);
    console.log(movie);
    res.render("movies/show.hbs", { movie });
  } catch (error) {
    next(error);
  }
});

router.post('/:id/delete', async(req, res, next) => {
  console.log("hey i'm in delete");
  const movieId = req.params.id;
  Movie.findByIdAndRemove(movieId)
    .then((dbResult) => {
      res.redirect("/movies"); // Redirect to "/labels" after delete is successful
    })
    .catch((error) => {
      next(error); // Sends us to the error handler middleware in app.js if an error occurs
    });
});

router.get("/:id/edit", async (req, res) => {
  try {
       const movie = await Movie.findById(req.params.id);
        res.render("movies/edit.hbs", {movie});
  } catch (error) {
    next(error);
  }
});

router.post("/:id/edit", async (req, res) => {
  try {
        await Movie.findByIdAndUpdate(req.params.id, req.body);
        res.redirect("/movies");
  } catch (error) {
    next(error);
  }
});

module.exports = router;