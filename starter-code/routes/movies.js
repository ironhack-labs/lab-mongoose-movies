const express = require("express");
const router = new express.Router();
const movieModel = require("./../models/movie");

router.get("/movies", (req, res, next) => {
  movieModel
    .find()
    .then((dbRes) => {
      res.render("movies/index", { movies: dbRes });
    })
    .catch(next);
});

router.get("/movie/:id", async (req, res,next) => {
  try {
    const movie = await movieModel.findById(req.params.id);
    res.render("movies/show.hbs", { movie });
  } catch (err) {
    next(err);
  }
});

router.get("/movies/new", (req, res) => {
  res.render("movies/new.hbs");
});

router.post("/movies/new", (req, res) => {
  const newMovie = req.body;
  movieModel
    .create(newMovie)
    .then(() => {
      res.redirect("/movies");
    })
    .catch((err) => {
      console.log(err);
    });
});

router.post("/:id/delete", (req, res, next) => {
  movieModel
    .findByIdAndRemove(req.params.id)
    .then((dbRes) => {
      res.redirect("/movies");
    })
    .catch(next);
});

router.get("/:id/edit", (req, res, next) => {
 movieModel
    .findById(req.params.id) 
    .then((movie) => {
      res.render("movies/edit", {movie});
    })
    .catch(next); 
});

router.post("/:id/edit", (req, res, next) => {
    const upMovie=req.body
  movieModel
    .findByIdAndUpdate(req.params.id,upMovie)
    .then((dbRes) => {
        res.redirect("/movies");
    })
    .catch(next);
});

module.exports = router;
