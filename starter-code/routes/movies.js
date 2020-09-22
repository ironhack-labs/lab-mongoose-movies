const express = require("express");
const router = express.Router();
const moviesModel = require("../models/movies.model");

router.get("/movies", (req, res, next) => {
  moviesModel
    .find({})
    .then((dbResult) => {
      res.render("movies/index", { movies: dbResult });
    })
    .catch((error) => {
      next(error);
    });
  });
  

router.get("/movies/new", (req, res,) => {
    res.render("movies/new");
  });

router.post("/movies/new", async (req, res,) => {
   
    try { 
      const newMovie = req.body;
      const dbResult = await moviesModel.create(newMovie);
      res.redirect("/movies");
    } catch (error) {
      next(error);
    }
  });


  router.get("/movies/:id", async (req, res) => {
    moviesModel.findById(req.params.id)
    .then((dbRes) => {
        res.render("movies/show", { movies: dbRes });
      })
      .catch(next);
});

router.post("/movies/:id/delete", (req, res, next) => {
    const movieId = req.params.id;
    moviesModel.findByIdAndDelete(movieId)
      .then((dbResult) => {
        res.redirect("/movies"); 
      })
      .catch((error) => {
        next(error); 
      });
  });

module.exports = router;
