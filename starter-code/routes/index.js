const express = require("express");
const router = express.Router();
const Celebrity = require("../models/Celebrity");
const Movie = require("../models/Movie");

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/celebrities", (req, res) => {
  Celebrity.find({})
    .then(docs => {
      res.render("celebrities/celebrities", { celebrities: docs });
    })
    .catch(err => console.log(`Error: ${err.message}`));
});

router.get("/celebrities/new", (req, res) => {
  res.render("celebrities/celebritiesForm");
});

router.get("/celebrities/:celebrityId", (req, res) => {
  const celebrityId = req.params.celebrityId;
  Celebrity.findById(celebrityId).then(item => {
    res.render("celebrities/celebrityDetails", { celebrity: item });
  });
});

router.post("/celebrities/", (req, res) => {
  const { name, occupation, catchPhrase } = req.body;
  Celebrity.create({
    name,
    occupation,
    catchPhrase
  })
    .then(newCelebrity => {
      res.redirect("/celebrities/" + newCelebrity._id);
    })
    .catch(err => console.log(`Error: ${err.message}`));
});

router.get("/celebrities/:celebrityId/edit", (req, res) => {
  const celebrityId = req.params.celebrityId;
  Celebrity.findById(celebrityId)
    .then(item => {
      res.render("celebrities/celebrityEdit", { celebrity: item });
    })
    .catch(err => console.log(`Error: ${err.message}`));
});

router.post("/celebrities/:celebrityId", (req, res) => {
  const celebrityId = req.params.celebrityId;
  const { name, occupation, catchPhrase } = req.body;
  Celebrity.updateOne(
    { _id: celebrityId },
    {
      name,
      occupation,
      catchPhrase
    }
  )
    .then(_ => {
      res.redirect("/celebrities/" + celebrityId);
    })
    .catch(err => console.log(`Error: ${err.message}`));
});

router.post("/celebrities/:celebrityId/delete", (req, res) => {
  const celebrityId = req.params.celebrityId;
  Celebrity.findByIdAndRemove(celebrityId)
    .then(_ => {
      res.redirect("/celebrities");
    })
    .catch(err => console.log(`Error: ${err.message}`));
});

router.get("/movies", (req, res) => {
  Movie.find({})
    .then(docs => {
      res.render("movies/movies.hbs", { movies: docs });
    })
    .catch(err => console.log(`Error: ${err.message}`));
});

router.get("/movies/new", (req, res) => {
  res.render("movies/moviesForm.hbs");
});

router.get("/movies/:movieId", (req, res) => {
  const movieId = req.params.movieId;
  Movie.findById(movieId).then(item => {
    res.render("movies/movieDetails.hbs", { movie: item });
  });
});

router.post("/movies/", (req, res) => {
  const { title, genre, plot } = req.body;
  Movie.create({
    title,
    genre,
    plot
  })
    .then(newMovie => {
      res.redirect("/movies/" + newMovie._id);
    })
    .catch(err => console.log(`Error: ${err.message}`));
});

router.get("/movies/:movieId/edit", (req, res) => {
  const movieId = req.params.movieId;
  Movie.findById(movieId)
    .then(item => {
      res.render("movies/movieEdit.hbs", { movie: item });
    })
    .catch(err => console.log(`Error: ${err.message}`));
});

router.post("/movies/:movieId", (req, res) => {
  const movieId = req.params.movieId;
  const { title, genre, plot } = req.body;

  Movie.updateOne(
    { _id: movieId },
    {
      title,
      genre,
      plot
    }
  )
    .then(_ => {
      res.redirect("/movies/" + movieId);
    })
    .catch(err => console.log(`Error: ${err.message}`));
});

router.post("/movies/:movieId/delete", (req, res) => {
  const movieId = req.params.movieId;
  Movie.findByIdAndRemove(movieId)
    .then(_ => {
      res.redirect("/movies");
    })
    .catch(err => console.log(`Error: ${err.message}`));
});

module.exports = router;
