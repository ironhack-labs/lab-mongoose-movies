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
      //res.send(docs);
      res.render("celebrities", { celebrities: docs });
    })
    .catch(err => console.log(`Error: ${err.message}`));
});

router.get("/celebrities/new", (req, res) => {
  res.render("celebritiesForm");
});

router.get("/celebrities/:celebrityId", (req, res) => {
  Celebrity.findById(req.params.celebrityId).then(item => {
    res.render("celebrityDetails", { celebrity: item });
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
  Celebrity.findById(req.params.celebrityId)
    .then(item => {
      res.render("celebrityEdit", { celebrity: item });
    })
    .catch(err => console.log(`Error: ${err.message}`));
});

router.post("/celebrities/:celebrityId", (req, res) => {
  Celebrity.updateOne(
    { _id: req.params.celebrityId },
    {
      name: req.body.name,
      occupation: req.body.occupation,
      catchPhrase: req.body.catchPhrase
    }
  )
    .then(_ => {
      res.redirect("/celebrities/" + req.params.celebrityId);
    })
    .catch(err => console.log(`Error: ${err.message}`));
});

router.post("/celebrities/:celebrityId/delete", (req, res) => {
  Celebrity.findByIdAndRemove(req.params.celebrityId)
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
