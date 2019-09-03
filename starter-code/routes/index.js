const express = require("express");
const router = express.Router();
const celebrityModel = require("../models/celebrity");
const movieModel = require("../models/movie");

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/celebrities", (req, res, next) => {
  celebrityModel
    .find()
    .then(dbRes =>
      res.render("celebrities/index", {
        celebrities: dbRes
      })
    )
    .catch(err => console.log(err));
});

router.post("/celebrities", (req, res, next) => {
  const name = req.body.name;
  const catchPhrase = req.body.catchPhrase;
  const occupation = req.body.occupation;
  celebrityModel
    .create({
      name,
      occupation,
      catchPhrase
    })
    .then(dbRes => {
      res.redirect("/celebrities");
    })
    .catch(err => console.log(err));
});

router.post("/celebrities/:id/delete", (req, res, next) => {
  celebrityModel
    .findByIdAndRemove(req.params.id)
    .then(dbRes => {
      res.redirect("/celebrities");
    })
    .catch(err => console.log(err));
});

router.get("/celebrities/new", (req, res, next) => {
  res.render("celebrities/new");
});

router.get("/celebrities/:id", (req, res, next) => {
  celebrityModel
    .findById(req.params.id)
    .then(dbRes => {
      res.render("celebrities/show", { celeb: dbRes });
    })
    .catch(dbErr => next());
});

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/movies", (req, res, next) => {
  movieModel
    .find()
    .then(dbRes =>
      res.render("movies/index", {
        movies: dbRes
      })
    )
    .catch(err => console.log(err));
});

router.post("/movies", (req, res, next) => {
  const title = req.body.name;
  const genre = req.body.catchPhrase;
  const plot = req.body.occupation;
  movieModel
    .create({
      title,
      genre,
      plot
    })
    .then(dbRes => {
      res.redirect("/movies");
    })
    .catch(err => console.log(err));
});

router.post("/movies/:id/delete", (req, res, next) => {
  movieModel
    .findByIdAndRemove(req.params.id)
    .then(dbRes => {
      res.redirect("/movies");
    })
    .catch(err => console.log(err));
});

router.get("/movies/new", (req, res, next) => {
  res.render("movies/new");
});

router.get("/movies/:id", (req, res, next) => {
  movieModel
    .findById(req.params.id)
    .then(dbRes => {
      res.render("movies/show", { movie: dbRes });
    })
    .catch(dbErr => next());
});

module.exports = router;
