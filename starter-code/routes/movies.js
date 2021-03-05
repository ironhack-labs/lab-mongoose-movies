const express = require('express');
const router  = express.Router();
const MovieModel = require("../models/Movie.model");
const CelebrityModel =require("../models/Celebrity.model");




router.get('/movies', (req, res, next) => {
  
    MovieModel.find()
      .then((dbRes) => {
        // console.log(dbRes);
        res.render("movies/index.hbs", { movies: dbRes });
      })
      .catch((error) => {
        console.log(error);
      });
  });

  

  router.get("/movies/new", (req, res, next) => {
    CelebrityModel.find()
    .then((dbRes) => {
      // console.log(dbRes);
      res.render("movies/new.hbs", { celeb:dbRes });
    })
    .catch((error) => {
      console.log(error);
    })
  });
 

  router.post('/movies/new', async (req, res, next) => {
    const { title, genre, plot, cast } = req.body; 
    
    try {
      await MovieModel.create({
        title,
        genre,
        plot,
        cast
        
      });
      res.redirect("/movies");
    } catch (err) {
      next(err);
    }
     
  });

  router.get('/movies/:id', (req, res, next) => {
  
    MovieModel.findById(req.params.id).populate("cast")
      .then((dbRes) => {
         console.log(dbRes);
        //  console.log(req.params.id);
        res.render("movies/show.hbs", { dbRes });
      })
      .catch((error) => {
        next(error);
      });
  });

  router.get("/movies/delete/:id", async (req, res, next) => {
    try {
      await MovieModel.findByIdAndDelete(req.params.id);
      res.redirect("/movies");
    } catch (err) {
      next(err); 
    }
  });

  router.get('/movies/edit/:id', (req, res, next) => {
    MovieModel.findById(req.params.id)
    .then((movie) => res.render("movies/edit", { movie }))
    .catch(next);
  });
  
  
  router.post('/movies/edit/:id', async (req, res, next) => {
    const { title, genre, plot, cast } = req.body; 
    try {
      await movieModel.findByIdAndUpdate(req.params.id, {
        title,
        genre,
        plot,
        cast
      });
      res.redirect("/movies");
    } catch (err) {
      next(err);
    }
  });


module.exports = router;

