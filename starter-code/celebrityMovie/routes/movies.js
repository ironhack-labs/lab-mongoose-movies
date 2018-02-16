const express = require('express');

// require the Drone model here
const Movie= require('../models/Movie');
const router = express.Router();


router.get('/', (req, res, next) => {  
    Movie.find((err, docs) => {
        if (err) {
          next();
          return;
        } else {
            res.render("movies/index", {docs:docs})
        }
    });
});
router.post('/', (req, res, next) => {  
    const newMovie = new Movie(
        {
        name: req.body.name,
        genre: req.body.genre,
        plot: req.body.plot
        }
      )
  
      newMovie.save((err)=>{
      if (err) {
        res.render("movies/new")    
      } else{
        res.redirect("/movies")
      }
      });
});
router.get('/:id', (req, res, next) => {  
    Movie.find({_id:req.params.id},(err, docs) => {
        if (err) {
          next();
          return;
        } else {
            res.render("movies/show", {movData:docs[0]})
        }
    });
});
router.post('/:id/delete', (req, res, next) => {  
    Movie.findByIdAndRemove(req.params.id,(err, docs) => {
        if (err) {
          next();
          return;
        } else {
            res.redirect("/movies")
        }
    });
});
router.get('/:id/edit', (req, res, next) => {  
    Movie.findById(req.params.id,(err, docs) => {
        if (err) {
          next();
          return;
        } else {
            res.render("movies/edit", {editMov: docs});
        }
    });
});
router.post('/:id', (req, res, next) => {  
      Movie.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        genre: req.body.genre,
        plot: req.body.plot
        },(err)=>{
      if (err) {
        next();
        return;   
      } else{
        res.redirect("/movies")
      }
      });
});
router.get('/new', (req, res, next) => { 
    
    res.render("movies/new")
        
});

module.exports = router;