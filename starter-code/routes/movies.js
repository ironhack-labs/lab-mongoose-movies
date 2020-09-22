const express = require('express');
const router  = express.Router();
const moviesModel = require("../models/movies.model");

router.get('/movies', (req, res, next) => {
    moviesModel.find({}) 
    .then((dbResult) => {
      res.render("movies/index", { movies: dbResult });
    })
    .catch((error) => {
      next(error);
    });
  });
  
  module.exports = router;
  

  router.get("/movies/:id", async (req, res) => {
    moviesModel.findById(req.params.id)
    .then((dbRes) => {
        res.render("movies/show", { movies: dbRes });
      })
      .catch(next);
});
