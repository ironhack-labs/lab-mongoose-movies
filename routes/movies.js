//#region Setup
const express = require("express");
const router = express.Router();
const Movie = require("../models/movie");
//#endregion

// #region overview GET /
router.get("/", (req, res, next) => {
  Movie.find({})
    .then(movies => {
      res.render("movies/index", { movies });
    })
    .catch(err => {
      next();
      return err;
    });
});
// #endregion

//#region details GET /:id
router.get("/:id", (req, res, next) => {
  Movie.findById(req.params.id)
    .then(movie => {
      res.render("movies/details", movie);
    })
    .catch(err => {
      next();
      return err;
    });
});
//#endregion

// #region new movie GET /new POST /
router.get("/new", (req, res, next) => {
  res.render("movies/new");
});

router.post("/", (req, res, next) => {
  new Movie(req.body)
    .save()
    .then(_ => {
      res.redirect("/movies/");
    })
    .catch(err => {
      next();
      return err;
    });
});
//#endregion

//#region GET /:id/delete
router.get("/:id/delete", (req, res, next) => {
  Movie.findByIdAndRemove(req.params.id)
    .then(() => {
      res.redirect("/movies/");
    })
    .catch(err => {
      next();
      return err;
    });
});
//#endregion

//#region GET /:id/edit POST /:id/edit
router.get("/:id/edit", (req, res, next) => {
  console.log("EDIT");
  Movie.findById(req.params.id)
    .then(movie => {
      console.log(movie);
      res.render("movies/edit", movie);
    })
    .catch(err => {
      next();
      return err;
    });
});

router.post("/:id/edit", (req, res, next) => {
  Movie.findByIdAndUpdate(req.params.id, req.body)
    .then(_ => {
      res.redirect("/movies");
    })
    .catch(err => {
      next();
      return err;
    });
});

//#endregion

module.exports = router;
