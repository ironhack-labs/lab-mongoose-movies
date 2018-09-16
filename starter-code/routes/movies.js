const express = require("express");
const router = express.Router();
const Movie = require("../models/movie");

router.get("/movies/new", (req, res, next) => {
  res.render("movies/new")
});


router.get("/movies", (req, res, next) => {
 Movie.find()
    .then(movies => {
      res.render("movies/index", {movies});
    })
    .catch(err => {
      console.log(err);
    });
});

router.get("/movies/:id", (req, res, next) => {
  Movie.findById({_id : req.params.id})
    .then(movies=> {
      res.render("movies/show", movies);
    })
    .catch(err => {
      console.log(err);
    });
});

router.post('/movies/new', (req, res, next) => {
  const { title, genre, plot} = req.body;
  new Movie({ title, genre, plot})
  .save().then(movies => {
    res.redirect("/movies")
  })
  .catch(err => {
    console.log(err)
  })
});

router.post("/movies/:id/delete", (req, res, next) => {
  Movie.findByIdAndRemove(req.params.id)
    .then(movies => {
      res.redirect("/movies");
    })
    .catch(err => {
      console.log(err);
    });
});

router.get("/movies/:id/edit", (req, res, next) => {
  Movie.findById(req.params.id)
    .then(movie => {
      res.render("movies/edit", movie);
    })
    .catch(err => {
      console.log(err);
    });
});


router.post("/movies/:id", (req, res) => {
  const { title, genre, plot } = req.body;
  Movie.findByIdAndUpdate(req.params.id,{title,genre,plot})
    .then(() => {
      res.redirect("/movies");
    })
    .catch(err => {
      console.log(err);
    });
});





module.exports = router;