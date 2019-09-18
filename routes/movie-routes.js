const express = require("express");
const router = express.Router();
const Movie = require("../models/Movie");
const Director = require("../models/Director");
const Actor = require("../models/Actor");

router.get("/movies", (req, res, next) => {
  // if(req.session.counter){
  //   req.session.counter++
  // } else {
  //   req.session.counter = 1;
  // }
  // useless example of how you can edit the session whenever/however you want

  Movie.find()
    .then(allTheMovies => {
      res.render("movie-views/index", {
        movies: allTheMovies,
        theUser: req.session.currentUser
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

router.get("/movies/add-new-movie", (req, res, next) => {
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

  Movie.create({
    title: title,
    director: director,
    starring: cast,
    genre: genre,
    plot: plot,
    image: image
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

router.get("/movies/edit-movie/:id", (req, res, next) => {
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
