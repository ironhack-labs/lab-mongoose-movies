const express = require('express');
const router  = express.Router();
const Celebrity = require("../models/Celebrity")
const Movie = require("../models/Movie")

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

// Celebrities

router.get("/celebrities", (req, res, next) => {
  Celebrity.find().then(celebrities => {
    res.render("celebrities", {
      celebrities
    })
  });
});

// Celebrity - Details
router.get("/celebrities/:celebsId", (req, res, next) => {
  let celebsId = req.params.celebsId
  Celebrity.findById(celebsId)
    .then(celebrity => {
      res.render("celebrities-details", {
      celebrities : celebrity
    })
  });
});

// New Celebrity
router.get("/new-celebrity", (req, res, next) => {
  res.render("new-celebrity");
});

router.post("/new-celebrity", (req, res, next) => {
  console.log("req.body", req.body)
  Celebrity.create({
    name: req.body.name,
    occupation: req.body.occupation ,
    catchPhrase: req.body.catchPhrase
   }).then(celebrityCreated => {
     res.redirect("/celebrities")
   })
});

// Delete Celebrity
router.get("/delete-celebrity/:celebsId", (req, res, next) => {
  let celebsId = req.params.celebsId
  Celebrity.findByIdAndDelete(celebsId)
    .then(celebrities => {
      res.redirect("/celebrities");
    })
});

// Edit Celebrity
router.get("/edit-celebrity/:celebsId", (req, res, next) => {
  Celebrity.findById(req.params.celebsId)
    .then(celebrity => {
      res.render("edit-celebrity", { 
        celebrity: celebrity 
      });
    })
});

router.post("/edit-celebrity/:celebsId", (req, res, next) => {
  let celebsId = req.params.celebsId;
  let { name, occupation, catchPhrase} = req.body;
  Celebrity.findByIdAndUpdate(celebsId, {
    name,
    occupation,
    catchPhrase
  }).then(() => {
    res.redirect("/celebrities/" + celebsId)
  })
});


// All Movies
router.get("/movies", (req, res, next) => {
  Movie.find().then(movies => {
    res.render("movies", {
      movies: movies
    })
  });
});

// Details Movies

router.get("/movies/:movieId", (req, res, next) => {
  let movieId = req.params.movieId
  Movie.findById(movieId)
    .then(movie => {
      res.render("movie-details", {
      movie : movie
    })
  });
});

// New Movie

router.get("/new-movie", (req, res, next) => {
    res.render("new-movie")
});

router.post("/new-movie", (req, res, next) => {
  Movie.create({
    name: req.body.name,
    genre: req.body.genre,
    plot: req.body.plot
  }).then(movieCreated => {
    res.redirect("/movies")
  })
});

// Delete Movie
router.get("/delete-movie/:movieId", (req, res, next) => {
  let movieId = req.params.movieId
  Movie.findByIdAndDelete(movieId)
    .then(movies => {
      res.redirect("/movies");
    })
});

module.exports = router;
