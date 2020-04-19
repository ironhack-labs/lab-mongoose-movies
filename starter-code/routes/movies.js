
const express = require("express");
const router = express.Router();
const Movie= require('../models/movie'); 


router.get("/", (req, res, next)=>{
 Movie
    .find({})
    .then((dbRes) => {
    res.render("movies/allMovies.hbs", {
      movies: dbRes
    })
  })
  .catch((err) => {
    next(err)
  })
});


router.get("/add", (req, res) => {
  res.render("movies/add.hbs")
});


router.get('/:id', (req, res, next)=>{
  Movie
  .findById(req.params.id)
  .then((dbResp)=>{
      res.render("movies/singleMovie.hbs", 
      {movies: dbResp})
  })
  .catch((err)=>{
       next(err)
  })
});

//post

router.post("/", (req, res)=>{
  Movie
  .create(req.body)
  .then((dbRes)=>{
    Movie.find({})
            .then((dbResp)=>{
              res.render("movies/allMovies.hbs", {
                movies:dbResp
              })
            })
            .catch((err)=>{c
              res.redirect("movies/add.hbs")
              console.log(err)})
              })
    .catch((err)=>{
      console.log(err)
    })
})

// delete 

router.post("/:id/delete", (req, res, next)=>{
  Movie.findByIdAndDelete(req.params.id)
  .then((dbResp)=>{
    res.redirect("/movies")
  })
  .catch((err)=>{
    next(err)
  })
})

// edit

router.get("/:id/edit", (req, res, next)=>{
  Movie.findById(req.params.id)
      .then((dbRes)=>{
        res.render("movies/edit", {
          movie: dbRes
        })
      })
      .catch((err)=>{
        next(err)
      })
})

router.post("/:id", (req, res, next)=>{
   if (req.body.title === "" || req.body.genre === "" || req.body.plot === "") {
     Movie.findById(req.params.body)
              .then((dbResp)=>{
                res.render("movies/edit",{
                  movies: dbResp, 
                  error:"tou need to fill every block"
                })
              })
              .catch((err)=>{
                console.log(err)
              })
  } else {
    Movie.findByIdAndUpdate(req.params.id, req.body, {
        new: true
      })
      .then((dbResp) => {
        res.redirect("/movies")
      })
      .catch((err) => {
        console.log(err)
      })
  }
  })


  module.exports = router;