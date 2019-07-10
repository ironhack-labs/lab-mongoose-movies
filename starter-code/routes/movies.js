const express = require("express");
const router = express.Router();
const Movie = require("../models/movie");
const ensureLogin = require("connect-ensure-login");

router.get("/movies", ensureLogin.ensureLoggedIn(), (req, res, next) => {
  Movie.find()
    .then(movie => {
      res.render("movies/index", { movies: movie });
    })
    .catch(err => {
      next(err);
    });
});

router.get("/movies/new", ensureLogin.ensureLoggedIn(), (req, res, next) => {
  res.render("movies/new");
});

router.post("/movies", ensureLogin.ensureLoggedIn(), (req, res, next) => {
  const { title, genre, plot, actor } = req.body;
  if (!title) {
    res.redirect("/movies");
  }
  const data = {
    title,
    genre,
    plot,
    actor
  };

  Movie.create(data)
    .then(() => {
      req.flash("success", "Movie created");
      res.redirect("/movies");
    })
    .catch(err => {
      next(err);
    });
});

router.get(
  "/movies/:id/edit",
  ensureLogin.ensureLoggedIn(),
  (req, res, next) => {
    Movie.findById(req.params.id)
      .then(movie => {
        res.render("movies/edit", { movieEdit: movie });
      })
      .catch(err => {
        next(err);
      });
  }
);

router.post("/movies/:id", ensureLogin.ensureLoggedIn(), (req, res, next) => {
  const { title, genre, plot, actor } = req.body;
  if (!title) {
    res.redirect(`/movies/${req.params.id}/edit`);
  }
  const data = {
    title,
    genre,
    plot,
    actor
  };

  Movie.findByIdAndUpdate(req.params.id, data)
    .then(() => {
      res.redirect("/movies");
    })
    .catch(err => {
      next(err);
    });
});

router.post(
  "/movies/:id/delete",
  ensureLogin.ensureLoggedIn(),
  (req, res, next) => {
    Movie.findByIdAndDelete(req.params.id)
      .then(movie => {
        req.flash("success", "Movie deleted");
        res.redirect("/movies");
      })
      .catch(err => {
        next(err);
      });
  }
);

router.get("/movies/:id", ensureLogin.ensureLoggedIn(), (req, res, next) => {
  Movie.findById(req.params.id)
    .then(movie => {
      res.render("movies/show", { oneMovie: movie });
    })
    .catch(err => {
      next(err);
    });
});

module.exports = router;
