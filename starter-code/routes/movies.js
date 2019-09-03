const express = require("express");
const router = express.Router();
const MovieModel = require("./../models/movie")

/* GET movies */
router.get("/", (req, res, next) => {
  console.log("hrere")
  MovieModel.find()
  .then(dbResValue => {
    console.log(dbResValue);
    res.render("movies/index",  { movies: dbResValue })
  })
  .catch(dbErr => {
    next(dbErr);
  });
})

router.get("/new", (req, res, next) => {
  // console.log("hey !!!");
  MovieModel.findOne({_id: req.params.id})
  .then(dbResValue => {
    // console.log(dbResValue);
    res.render("movies/new",  { movies: dbResValue })
  })
  .catch(dbErr => {
    next(dbErr);
  });
});

router.post("/new", (req, res, next) => {
  // console.log("hey !!!");
  MovieModel.create(
    { title: req.body.title,
      genre: req.body.genre,
      plot: req.body.plot 
    })
  .then(dbResValue => {
    // console.log(dbResValue);
    res.redirect("/movies");
  })
  .catch(dbErr => {
    next(dbErr);
  });
})

router.get("/:id", (req, res, next) => {
  // console.log("hey !!!", req.params.id);
  MovieModel.findOne({_id: req.params.id})
  .then(dbResValue => {
    console.log(dbResValue);
    // res.render("../views/movies.hbs")
    res.render("movies/shows", { movie: dbResValue });
  })
  .catch(dbErr => {
    next(dbErr);
  });
})

router.post("/:id/delete", (req, res, next) => {

  // console.log("ici id")
  console.log(req.params._id)
  MovieModel.findByIdAndRemove({_id: req.params.id})
  .then(dbResValue => {
    console.log("delete ok", dbResValue);
    res.redirect("/movies");
  })
  .catch(dbErr => {
    // console.log("tt va mal")
    next(dbErr);
  });
})

module.exports = router;