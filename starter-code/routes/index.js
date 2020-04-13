const express = require("express");
const router = express.Router();
const Celeb = require("../models/celebrity");
const Movie = require("../models/movie");

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

// new star
router.get("/new-star", (req, res) => {
  res.render("stars/new-star");
});

router.post("/stars", (req, res) => {
  let newStar = new Celeb({
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase,
  });

  console.log(newStar);

  newStar
    .save()
    .then(() => {
      res.redirect("/stars");
    })
    .catch((error) => {
      res.redirect("/new-star");
      console.log("An error happened while saving a new user:", error);
    });
});

// delete star
router.post("/stars/delete/:identifier", (req, res, next) => {
  Celeb.findByIdAndRemove(req.params.identifier)
    .then(() => {
      res.redirect("/stars");
    })
    .catch((error) => {
      return error;
    });
});


// new movie

router.get("/add-movie", (req, res) => {
  res.render("movies/add");
});

router.post("/movies", (req, res, next) => {

  let newMov = new Movie({
    title: req.body.title,
    genre: req.body.genre,
    plot: req.body.plot,
  });

  console.log(req.body)
  newMov
    .save()
    .then(() => {
      res.redirect("/movies");
    })
    .catch((error) => {
      res.redirect("/add-movie");
      console.log("An error happened while saving a new movie:", error);
    });
});



module.exports = router;
