const express = require("express");
const router = express.Router();
const Movie = require("../models/Movie");
const Director = require("../models/Director");
const Actor = require("../models/Actor");
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const passport = require("passport");

router.get("/movies", (req, res, next) => {
  Movie.find()
    .then(allTheMovies => {
      if (req.user) {
        allTheMovies.forEach(eachMovie => {
          if (req.user._id.equals(eachMovie.creator) || req.user.isAdmin){
            eachMovie.mine = true;
          }
        });
      }
      res.render("movie-views/index", {
        movies: allTheMovies
      });
    })
    .catch(err => {
      next(err);
    });
});

router.get("/movies/details/:id", (req, res, next) => {
  let id = req.params.id;
  Movie.findById(id)
    .populate("director")
    .populate("starring")
    .then(movieObject => {
      console.log(movieObject);
      res.render("movie-views/show", { movie: movieObject });
    })
    .catch(err => {
      next(err);
    });
});

router.get("/movies/add-new", (req, res, next) => {
  if (!req.user) {
    req.flash("error", "please login to add a new film");
    res.redirect("/login");
  }
  Director.find()
    .then(allDirectors => {
      Actor.find()
        .then(allActors => {
          res.render("movie-views/new", {
            directors: allDirectors,
            actors: allActors
          });
        })
        .catch(err => {
          next(err);
        });
    })
    .catch(err => {
      next(err);
    });
});

router.post("/movies/creation", (req, res, next) => {
  let title = req.body.theTitle;
  let director = req.body.theDirector;
  let cast = req.body.theCast;
  let genre = req.body.theGenre;
  let plot = req.body.thePlot;
  let image = req.body.theImage;
  let creator = req.user._id;

  Movie.create({
    title: title,
    director: director,
    starring: cast,
    genre: genre,
    plot: plot,
    image: image,
    creator: creator
  })
    .then(result => {
      res.redirect("/movies/details/" + result._id);
    })
    .catch(err => {
      next(err);
    });
});

router.post("/movies/delete/:id", (req, res, next) => {
  let id = req.params.id;
  Movie.findByIdAndRemove(id)
    .then(result => {
      res.redirect("/movies");
    })
    .catch(err => {
      next(err);
    });
});

router.get("/movies/edit/:id", (req, res, next) => {
  let id = req.params.id;
  Movie.findById(id)
    .then(theMovie => {
      Actor.find()
        .then(allActors => {
          Director.find()
            .then(allDirectors => {
              allDirectors.forEach(eachDirector => {
                if (eachDirector._id.equals(theMovie.director)) {
                  eachDirector.chosen = true;
                }
              });
              res.render("movie-views/edit", {
                movie: theMovie,
                actors: allActors,
                directors: allDirectors
              });
            })
            .catch(err => {
              next(err);
            });
        })
        .catch(err => {
          next(err);
        });
    })
    .catch(err => {
      next(err);
    });
});

router.post("/movies/update/:id", (req, res, next) => {
  let id = req.params.id;
  Movie.findByIdAndUpdate(id, {
    title: req.body.theTitle,
    director: req.body.theDirector,
    starring: req.body.theCast,
    genre: req.body.theGenre,
    plot: req.body.thePlot,
    image: req.body.theImage
  })
    .then(result => {
      res.redirect("/movies/details/" + id);
    })
    .catch(err => {
      next(err);
    });
});

module.exports = router;
