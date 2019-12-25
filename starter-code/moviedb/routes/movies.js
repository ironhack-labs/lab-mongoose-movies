const express = require("express");
const router = express.Router();
const Movie = require('../models/Movies');


router.get("/movies", (req, res, next) => {
  Movie.find()
    .then(allTheMovies => {
      // console.log('Retrieved books from DB:', allTheBooksFromDB);
      res.render("./movies-views/movies", { movies: allTheMovies });
    })
    .catch(error => {
      console.log("Error while getting the books from the DB: ", error);
    });
});

router.get("/movies/:movieId", (req, res, next) => {
  Movie.findById(req.params.movieId)
    .then(theMovie => {
      res.render("./movies-views/movies-details", { movie: theMovie });
    })
    .catch(error => {
      console.log("Error while retrieving book details: ", error);
    });
});

router.get("/add-movie", (req, res, next) => {
  res.render("./movies-views/movies-edit");
});

router.post("/add-movie", (req, res, next) => {
  const title = req.body.title;
  const genre = req.body.genre;
  const plot = req.body.plot;

  if (title === "" || genre === "" || plot === "") {
    res.render("./movies-views/movies-edit", {
      errorMessage: "Tienes que ingresar los datos"
    });
    return;
  }

  Movie.findOne({ title: title })
    .then(movie => {
      if (movie != null) {
        res.render("./movies-views/movies-edit", {
          errorMessage: "This movie alredy exists"
        });
        return;
      }

      Movie.create({
        title,
        genre,
        plot
      })
        .then(() => {
          res.redirect("/movies");
        })
        .catch(errr => {
          console.log(error);
        });
    })
    .catch(error => {
      next(error);
    });
});

router.post("/movies/:movieId", (req, res, next) => {

  const title = req.body.title;
  const genre = req.body.genre;
  const plot = req.body.plot;

  if (title === "" || genre === "" || plot === "") {
    res.render("./movies-views/movies-details", {
      errorMessage: "Tienes que ingresar los datos"
    });
    return;
  }

  Movie.findById(req.params.movieId, (error, movie) => {
    if (error) {
      next(error);
    } else {
      movie.title = title;
      movie.genre = genre;
      movie.plot = plot;
      movie.save(error => {
        if (error) {
          next(error);
        } else {
          res.redirect(`/movies/${req.params.movieId}`);
        }
      });
    }
  });
});

router.get("/movies/:movieId/delete", (req, res, next) => {
  Movie.remove({ _id: req.params.movieId }, (error, movie) => {
    if (error) {
      next(error);
    } else {
      res.redirect("/movies");
    }
  });
});

module.exports = router;
