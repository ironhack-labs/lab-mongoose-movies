const express = require("express");
const router = express.Router();
const MovieModel = require("../models/movies");

router.get("/movies", (req, res, next) => {
  MovieModel.find()
    .then((dbRes) => res.render("movies/index.hbs", { movies: dbRes }))
    .catch(next);
});

router.get("/movies/new", (req, res) => {
    res.render("movies/new.hbs");
  });

router.post("/movies/new", async (req, res) => {
  try {
    await MovieModel.create(req.body);
    res.redirect("/movies");
  } catch (err) {
    res.redirect("/movies/new")
    next(err);
  }
}); 

router.get("/movies/:id/edit", (req, res) => {
    MovieModel.findByIdAndUpdate(req.params.id)
      .then(movie => {
        res.render("movies/edit", { movie });
      })
      .catch((dbErr) => console.error(dbErr));
  }); 

router.post("/movies/:id/delete", (req, res) => {
    MovieModel.findByIdAndRemove(req.params.id)
      .then(dbRes => { 
          res.redirect("/movies");
      })
      .catch((dbErr) => console.error(dbErr));
  });



  router.post("/movies/:id/edit", async (req, res, next) => {
    try {
      await MovieModel.findByIdAndUpdate(req.params.id, req.body);
      res.redirect("/movies");
    } catch(err) {
      next(err);
    }
  });

router.get("/movies/:id", (req, res) => {
  MovieModel.findById(req.params.id)
    .then((movie) => {
      res.render("movies/show.hbs", { movie });
    })
    .catch((dbErr) => console.error(dbErr));
});



module.exports = router;
