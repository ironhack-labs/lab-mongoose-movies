const express = require("express");
const router = express.Router();
const MoviesModel = require("./../models/movie");
const CelebrityModel = require("./../models/celebrity");

router.get("/movies/new", (req, res, next) => {
  const celebrity = CelebrityModel.find().then(
    (dbRes) => {
      res.render("movies/new-movie", {celebrity:dbRes});
    }).catch(next)
  });

router.post("/movies/create", async (req, res, next) => {
    const { name, genre, plot, cast } = req.body;
      try {
        await MoviesModel.create({
          name,
          genre,
          plot,
          cast
        });
        res.redirect("/movies");
      } catch (error) {
          res.render("movies/new-movie.hbs");
      }
    });

    router.get("/movies",  function (req, res, next) {
      MoviesModel.find()
      .then((dbRes) => {
        res.render("movies/movies.hbs", {
          movieList:dbRes
        });
      })
      .catch((dbError) => {
        next(dbError);
      });
  });

  router.get('/movies/:id', (req, res, next) => {
    MoviesModel.findById(req.params.id)
      .then(movie => {
        res.render('movies/movie-details.hbs', movie)
      })
      .catch(err => next(err));
  });
  
    
module.exports = router;