const express = require("express");
const router = new express.Router();
const movieModel = require('./../models/movie');



router.get("/", async (req, res, next) => {
    try {
        const movies = await movieModel.find({});
        console.log(movies);
      res.render("movies/index", { movies: movies});
    } catch (err) {
      next(err);
    }
  });




  router.get("/new", async (req, res, next) => {
      console.log("toto");
    res.render("movies/new");
  });

  //infos
  router.get("/:id", async (req, res, next) => {
    try {
      const moviesinfo = await movieModel.findById(req.params.id);
      res.render("movies/show", moviesinfo);
    } catch (err) {
      next(err);
    }
  });

  
  router.post("/", (req, res, next) => {
      console.log(req.body);
    movieModel.create(req.body)
      .then((movie) => {
        res.redirect("/movies");
      })
      .catch((err) => {
        console.log(err);
        res.redirect("/movies/new");
      });
  });

  router.post("/:id/delete", async (req, res, next) => {
    try {
      await movieModel.findByIdAndRemove(req.params.id);
      res.redirect("/");
    } catch (err) {
      next(err);
    }
  });


  module.exports = router;