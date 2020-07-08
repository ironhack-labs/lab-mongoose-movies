const express = require("express");
const router = new express.Router();
const MovieModel = require("./../model/movie");

// *********************************************
// ALL THESE ROUTES ARE PREFIXED WITH "/movies"
// *********************************************

router.get("/", async (req, res, next) => {
    try {
      const movies = await MovieModel.find();
      res.render("movies/index", { movies });
    } catch (err) {
      next(err);
    }
  });

  router.get("/new", (req, res, next) => {
    res.render("movies/new");
  });
  
  router.post("/new", async (req, res, next) => {
    try {
      await MovieModel.create(req.body); // what difference with SAVE method ?
      res.redirect("/movies");
    } catch (err) {
      next(err);
    }
  });

  router.get("/:id", async (req, res, next) => {
    try {
      //console.log("in try");
      const movie = await MovieModel.findById(req.params.id);
      //console.log("found document in collection");
      res.render("movies/show", movie);
    } catch (err) {
      next(err);
    }
  });

  router.post("/:id/delete", async (req, res, next) => {
    try {
      //console.log("in try");
      await MovieModel.findByIdAndDelete(req.params.id);
      //console.log("deleted document in collection");
      res.redirect("/movies");
    } catch (err) {
      next(err);
    }
  });


  router.get("/:id/edit", async (req, res, next) => {
    try {
      const movie = await MovieModel.findById(req.params.id);
      res.render("movies/edit", movie);
    } catch (err) {
      next(err);
    }
  });
  
  router.post("/:id/edit", async (req, res, next) => {
    try {
      //console.log("in try");
      await MovieModel.findByIdAndUpdate(req.params.id, req.body);
      //console.log("updated document in collection");
      res.redirect("/movies");
    } catch (err) {
      next(err);
    }
  });



/// SHOULD BE LAST

module.exports = router;