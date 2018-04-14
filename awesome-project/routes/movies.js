const express = require("express");
const router = express.Router();

const Movie = require("../models/movie");

/* CRUD -> Create show form */
router.get("/new", (req, res) => {
  res.render("movie_new");
});

/* CRUD -> Acquire form params and create the movie object in DB */
router.post("/new", (req, res) => {
  const { title, genre, plot } = req.body;

  const movie = new Movie({ title, genre, plot });
  movie.save().then(movie => {
    console.log("Nueva celebrity creada");
    console.log(movie);
    res.redirect("/movie");
  });
});

/* CRUD -> Delete the movie in DB */
router.get("/:id/delete", (req, res) => {
  Movie.findByIdAndRemove(req.params.id).then(() => {
    res.redirect("/movie");
  })
  .catch(error => {
    res.render("error")
  }); 
});

/* CRUD -> Retrieve ALL */
router.get("/", (req, res) => {
    Movie.find().then(movies => {
      console.log(movies)
      res.render("movie_list", { movies });
    })
    .catch(error => {
      console.log(error)
    }) 
  });

  router.get("/:id", (req, res, next) => {
    Movie.findById(req.params.id).then(movie => {
      console.log(movie);
        res.render("show_movie", { movie });
      })
      .catch(error => {
        res.render("error")
      })
    });

    /* CRUD -> Udpate, show movie update form */
router.get("/:id/edit", (req, res) => {
  Movie.findById(req.params.id).then(movie => {
    res.render("movie_edit", { movie });
  });
});

/* CRUD -> Udpate, update the movie in DB */
router.post("/:id/edit", (req, res) => {
  const { title, genre, plot } = req.body;
  const updates = { title, genre, plot };
  Movie.findByIdAndUpdate(req.params.id, updates).then(() => {
    res.redirect("/movie");
  });
});
  module.exports = router;