const express = require("express");
const router = new express.Router();
const movieModel = require("../models/movies");

router.get("/movies", (req, res, next) => {
    movieModel
        .find()
        .then(dbResults =>
            res.render("movies/index", {
                movie: dbResults
            })
        )
        .catch(next);
});
router.get("/movies/new", (req, res, next) => {

    res.render("movies/new")
});

router.get("/movies/:id", (req, res, next) => {
    movieModel
        .findById(req.params.id)
        .then(movie =>
            res.render("movies/details", {
                movie
            }))
        .catch(next);
});

router.get("/movies/delete/:id", async (req, res, next) => {
    try {
      await movieModel.findByIdAndRemove(req.params.id);
      res.redirect("/movies")
    } catch(err) {
      next(err);
    }
  });
  router.get("/movies/update/:id", async (req, res, next) => {
    try {
      const movi = await movieModel.findById(req.params.id);
      res.render("movies/update", {movi});
    } catch(err) {
      next(err)};
    })

router.post("/movies/new", async (req, res) => {    
    try {
        await movieModel.create(req.body);
        res.redirect("/movies")
    } catch (err) {
        next(err);
    }
});
router.post("/movies/update/:id", async (req, res) => {
    console.log(req.params.id, req.body)
    try {
      await movieModel.findByIdAndUpdate(req.params.id, req.body);
      res.redirect("/movies");
    } catch(err) {
      next(err);
    }
  });



module.exports = router;