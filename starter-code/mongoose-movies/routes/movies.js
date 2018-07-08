const express = require("express");
const router = express.Router();
const Movie = require("../models/Movie");

/* GET home page */
router.get("/", (req, res, next) => {
  Movie.find({})
    .then(movies => {
      console.log("movies get success");
      res.render("movies/index", { movies });
    })
    .catch(err => {
      console.log("Error finding movies");
    });
});
router.get("/new", (req, res, next) => {
  console.log("New Movie");
  res.render("movies/new");
});
router.get("/:id", (req, res, next) => {
  Movie.findById(req.params.id)
    .then(Movie => {
      console.log("Movie get success");
      res.render("movies/detail", Movie);
    })
    .catch(err => {
      console.log("Error finding Movie");
    });
});

router.get("/:id/delete", (req, res, next) => {
  Movie.findByIdAndRemove(req.params.id)
    .then(Movie => {
      console.log("Movie remove success");
      res.redirect("/movies");
    })
    .catch(err => {
      console.log("Error finding Movie");
    });
});
router.get("/:id/edit", (req, res, next) => {
  Movie.findById(req.params.id).then(data => {
    console.log("Movie updating");
    res.render("movies/edit", data);
  });
});

router.post("/", (req, res, next) => {
  const { name, genre, plot } = req.body;
  new Movie({
    name,
    genre,
    plot
  })
    .save()
    .then(Movie => {
      console.log("Movie added success");
      res.redirect("/movies");
    })
    .catch(err => {
      console.log("Error saving Movie");
    });
});
router.post("/:id", (req, res, next) => {
  const { name, genre, plot } = req.body;
  Movie.findByIdAndUpdate(req.params.id, { name, genre, plot })

    .then(Movie => {
      console.log("Movie update success");
      res.redirect("/movies");
    })
    .catch(err => {
      console.log("Error saving Movie");
    });
});

module.exports = router;
