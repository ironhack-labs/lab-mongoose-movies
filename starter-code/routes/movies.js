const express = require('express');
const router = express.Router();
const Movies = require("../models/Movie");

/* GET home page */


router.get('/movies', (req, res, next) => {
  Movies.find()
    .then(allMovies => {
      console.log(allMovies)
      res.render('movies/index', {
        allMovies
      })
    })

    .catch(() => {
      next()
    })
});

router.get("/movies/:id", (req, res, next) => {
  Movies.findOne({
      '_id': req.params.id
    })
    .then(movieFound=> {
      res.render('movies/show', {
        movieFound
      })
    })
    .catch(() => {
      next()
    })
});

router.get(`/movies/new`, (req, res, next) => res.render('movies/new'))

router.post(`/movies`, (req, res, next) => {
  const {
    name,
    genre,
    plot
  } = req.body;
  // console.log(name, occupation, catchPhrase)
  Movies.create({
   name,
   genre,
   plot
  })
    .then(() => res.redirect(`movies`))
    .catch(error => {
      res.redirect(`movies/new`)
    })
})

router.post(`/movies/:id/delete`, (req, res, next) => {
   Movies.findByIdAndRemove({
       '_id': req.params.id
     })
     .then(() => {
       res.redirect("/movies");
     })
     .catch(() => {
       next();
     });
   });



router.post("/movies/:id/edit", (req, res, next) => { ///
  Movies.find({
      _id: req.params.id
    })
    .then(movieEdit => {
      res.render("movies/edit", {
        movieEdit
      });
    })
    .catch(() => {
      next();
    });
});

router.post("/movies/:id/", (req, res, next) => {
  Movies.findByIdAndUpdate({
      _id: req.params.id
    }, req.body)
    .then(() => {
      res.redirect("/movies");
    })
    .catch(() => {
      next();
    });
});

module.exports = router;