const express = require("express");
const url = require("url");
const router = express.Router();

const Movie = require("../models/Movie");

router.get("/movies", (req, res, next) => {
  Movie.find({})
    .then(movies => {
      res.render("movies/index", { movies });
    })
    .catch(err => {
      next();
    });
});

router.post("/movies", (req, res, next) => {
  const { title, genre, plot } = req.body;

  new Movie({ title, genre, plot })
    .save()
    .then(() => {
      res.redirect("/movies");
    })
    .catch(err => {
      setErrors(res, err);

      res.redirect("/movies/new");
    });
});

router.get("/movies/new", (req, res, next) => {
  const { titleClass, genreClass, plotClass } = req.cookies;
  let errorFields = [];
  if (req.cookies.errorFields) {
    errorFields = req.cookies.errorFields.split(",");
  }

  resetCookies(res);

  const data = {
    form: {
      errorFields,
      titleClass,
      genreClass,
      plotClass,
      action: '/movies',
      buttonText: 'Save'
    }
  }
  res.render("movies/new", { data });
});

router.get("/movies/:id", (req, res, next) => {
  Movie.findById(req.params.id)
    .then(movie => {
      res.render("movies/show", { movie });
    })
    .catch(err => {
      next();
    });
});

router.post("/movies/:id/delete", (req, res, next) => {
  Movie.findByIdAndRemove(req.params.id)
    .then(() => {
      res.redirect("/movies");
    })
    .catch(err => {
      next();
    });
});

const setErrors = (res, err) => {
  const errors = [];
  for (field in err.errors) {
    errors.push(err.errors[field].message);

    res.cookie(field + "Class" , "error", {maxAge: 3000});
  }

  res.cookie('errorFields' , errors.join(), {maxAge: 3000});
}

const resetCookies = (res) => {
  res.clearCookie('titleClass');
  res.clearCookie('genreClass');
  res.clearCookie('plotClass');
  res.clearCookie('errorFields');
}

module.exports = router;