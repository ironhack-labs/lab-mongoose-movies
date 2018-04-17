require("dotenv").config();

const express = require('express');
const router  = express.Router();

const Movie = require("../models/Movie");


router.get("/index",(req, res, next) => {
  Movie.find().then(movies => {
    
    res.render("movies/index",{movies});
  })
  .catch(err => {
    console.log(err);
  });
});


router.get("/new", (req, res, next) => {
  res.render("movies/new",)
});

router.post("/new", (req, res, next) => {
  const {title, genre, plot} = req.body;
  const movieNew = new Movie({title, genre, plot});

  movieNew
  .save()
  .then(movieNew => {
    res.redirect("/movies/index");
  })
  .catch(err =>{
    res.render("movies/new")
  });
});


router.get("/:id", (req, res, next) => {
  Movie.findById(req.params.id).then(movie => {
    res.render("movies/show", {movie});
  })
  .catch(err => {
    console.log(err);
  });
});


router.post("/:id/delete", (req, res, next) => {
  Movie.findByIdAndRemove(req.params.id).then(() => {
    res.redirect("/movies/index");
  })
  .catch(err => {
    res.render("error", err);
  });
});


router.get("/:id/edit", (req, res, next) => {
  Movie.findById(req.params.id).then(movie => {
    res.render("movies/edit", {movie});
  })
  .catch(err => {
    res.render("error", err);
  });
});

router.post("/:id/edit", (req, res, next) => {
  const {title, genre, plot} = req.body;
  const movieEdited = {title, genre, plot};
  Movie.findByIdAndUpdate(req.params.id, movieEdited)
    .then(() => {
      res.redirect("/movies/index");
    })  
    .catch(err => {
      res.render("error", err);
    });

});


module.exports = router;