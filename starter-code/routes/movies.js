const express = require('express');

const Movie = require("../models/Movie.js");

const router = express.Router();

router.get("/", (req, res, next) => {
  Movie.find({},(err,result)=>{
    if(err) return next;
    res.render("movies/index", {movieArray:result});
  });
});

router.get("/new", (req, res, next) => {
    res.render("movies/new");
});

router.post("/new", (req, res, next) => {
  const movie = new Movie({
    title: req.body.title,
    genre: req.body.genre,
    plot: req.body.plot,
  });
  movie.save((err)=>{
  if (err) {
    res.render("movies/new")    
  } else{
    res.redirect("/movies/new")
  }
  });
});

router.get("/:id", (req,res)=>{
  const id = req.params.id;
  Movie.findById(id, (err,doc) => {
    res.render("movies/show", {movie:doc});
  });
});

router.post("/:id/delete", (req, res) => {
  var id = req.params.id;
  Movie.findByIdAndRemove(id,(err, docs) => {
    if (err) {
      next();
      return;
    } else {
        res.redirect("/movies")
    }
  });
});

router.get('/:id/edit', (req, res, next) => {  
  
  var id = req.params.id;
  console.log(id);
  Movie.findById(id,(err, doc) => {
    res.render("movies/edit", {movie:doc});
  });
});

router.post('/:id', (req, res, next) => {  
  var id = req.params.id;
    Movie.findByIdAndUpdate(id, {
      title: req.body.title,
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

module.exports = router;