const express = require("express");
const router = express.Router();
const Movie = require("../models/Movie");
const Director = require("../models/Director");
const Actor = require("../models/Actor");

router.get("/movies", (req, res, next) => {
  Movie.find()
    .then(allTheMovies => {
      res.render("movie-views/index", { movies: allTheMovies });
    })
    .catch(err => {
      next(err);
    });
});

router.get("/movies/details/:id", (req, res, next) => {
  let id = req.params.id;
  Movie.findById(id)
    .populate("director")
    .then(movieObject => {
      console.log();
      res.render("movie-views/show", { movie: movieObject });
    })
    .catch(err => {
      next(err);
    });
});

router.get("/movies/add-new-movie", (req, res, next) => {
  Director.find()
    .then((allDirectors) => {
      Actor.find()
      .then((allActors) => {
        res.render("movie-views/new", { directors: allDirectors, actors: allActors });
      })
      .catch((err)=>{
        next(err);
      })
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
    cast: cast,
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
    .then((theMovie) => {
      Director.find()
        .then(allDirectors => {
          allDirectors.forEach((eachDirector) => {
            if (eachDirector._id.equals(theMovie.director)) {
              eachDirector.chosen = true;
            }
          });
          res.render("movie-views/edit", {
            movie: theMovie,
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
});

router.post("/movies/update/:id", (req, res, next) => {
  let id = req.params.id;
  Movie.findByIdAndUpdate(id, {
    title: req.body.theTitle,
    director: req.body.theDirector,
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
