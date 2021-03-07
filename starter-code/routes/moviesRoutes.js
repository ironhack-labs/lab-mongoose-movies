const express = require("express");

const router = express.Router();

const CelebrityModel = require("../models/Celebrity");
const MovieModel = require("../models/Movie.model");

router.get("/", (req, res, next) => {
  MovieModel.find()
    .then((dbRes) => {
      res.render("movies/movies", { myMovies: dbRes });
    })
    .catch((err) => console.log(err));
});

//Create one//

router.get("/new", (req, res, next) => {
    // res.render("movies/new-movies")

  CelebrityModel.find()
    .then((dbRes) => {
      res.render("movies/new-movies", { myCelebrities: dbRes });
    })
    .catch((err) => next(err));
});

router.post("/create", (req, res, next) => {
  const { title, genre, plot, cast} = req.body;
  const newArtist = { ...req.body };
  console.log(newArtist)
  MovieModel.create(newArtist)
    .then(() => {
      res.redirect("/movies");
    })
    .catch((err) => next(err));
});

//Movies ID

router.get('/:id', (req, res, next) => {
  console.log(req.params.id)
  MovieModel.findById(req.params.id).populate('cast')
  .then((dbRes) => {
    res.render('movies/movie-details', {movie : dbRes})
  })
  .catch(err => next(err))
})

//deleting movies

router.post('/:id/delete', (req, res, next) => {
  MovieModel.findByIdAndRemove(req.params.id)
  .then(() => res.render('movies/movies') )
  .catch(err => next(err))
})


module.exports = router;