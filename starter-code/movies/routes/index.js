const express = require('express');
const router  = express.Router();
const Celebrity = require('../models/Celebrity');
const Movie = require('../models/Movie');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

// Celebrities list
router.get('/celebrities', (req, res) => {
  Celebrity.find()
    .then(celebrities => {
      res.render('celebrities', {header: "Celebrities", celebrities})
  })
    .catch(err => {
      console.log(err);
    })
});

// Celebrity details
router.get('/celebrities/details/:id', (req, res) => {
  Celebrity.find()
    .then(celebrities => {
      Celebrity.findById(req.params.id)
        .then(celebrity => {
          res.render("celebrityDetails", {celebrity});
        })
    })
    .catch(err => {
      console.log(err);
    })
});

// Add Celebrities
router.get("/celebrities/new", (req, res) => {
  res.render("new-celebrity");
});

// Remove Celebrity
router.post('/celebrities/details/:id/delete', (req, res) => {
  Celebrity.findByIdAndRemove(req.params.id)
      .then(() => {
          res.redirect('/celebrities');
      })
      .catch((err) => {
        console.log(err);
      })
});

// Update Celebrity
router.post('/celebrities/details/:id/edit', (req, res) => {
  Celebrity.findByIdAndUpdate(req.params.id, { $set: req.body })
      .then(celebrity => {
          res.redirect(`/celebrities/details/${celebrity._id}`);
      })
      .catch((err) => {
        console.log(err);
      })
});

router.post("/celebrities/new", (req, res) => {
  Celebrity.create(req.body)
      .then(() => {
          res.redirect("/celebrities");
      })
      .catch((err) => {
        console.log(err);
      })
});

// Movies list
router.get('/movies', (req, res) => {
  Movie.find()
    .then(movies => {
      res.render('movies', {header: "Movies", movies});
  })
    .catch(err => {
      console.log(err);
    })
});

// Movie details
router.get('/movies/details/:id', (req, res) => {
  Movie.find()
    .then(movies => {
      Movie.findById(req.params.id)
        .then(movie => {
          res.render("movieDetails", {movie});
        })
    })
    .catch(err => {
      console.log(err);
    })
});

// Add Movies
router.get("/movies/new", (req, res) => {
  res.render("new-movie");
});

// Remove Movie
router.post('/movies/details/:id/delete', (req, res) => {
  Movie.findByIdAndRemove(req.params.id)
      .then(() => {
          res.redirect('/movies');
      })
      .catch((err) => {
        console.log(err);
      })
});

// Update Movie
router.post('/movies/details/:id/edit', (req, res) => {
  Movie.findByIdAndUpdate(req.params.id, { $set: req.body })
      .then(movie => {
          res.redirect(`/movies/details/${movie._id}`);
      })
      .catch((err) => {
        console.log(err);
      })
});

router.post("/movies/new", (req, res) => {
  Movie.create(req.body)
      .then(() => {
          res.redirect("/movies");
      })
      .catch((err) => {
        console.log(err);
      })
});

module.exports = router;