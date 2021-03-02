const express = require("express");
const router = express.Router();
const MovieModel = require("../models/movie");
const CelebrityModel = require("../models/celebrity");

//ROUTE TO GET THE MOVIES FORM
router.get("/movies/new", (req, res, next) => {
  CelebrityModel.find()
    .then((celebrity) => {
      res.render("movies/new-movie", { celebrity });
    })
    .catch((dbError) => {
      next(dbError);
    });
});

//ROUTE TO POST THE MOVIES FORM / CREATE A MOVIE
router.post("/movies/create", (req, res, next)=>{
    MovieModel.create(req.body)
    .then(()=>{
        res.redirect("/movies");
    })
    .catch((error)=>{
        console.log(error)
    })
})

//ROUTE TO DISPLAY ALL MOVIES
router.get("/movies", (req, res, next)=>{
    MovieModel.find()
    .then((movie)=>{
        res.render("movies/movies", {movie})
    })
    .catch((dbError)=>{
        console.log(dbError)
    })
})


//ROUTE TO DISPLAY A SPECIFIC MOVIE
router.get('/movies/:id', (req, res, next)=>{
    MovieModel.findById(req.params.id).populate('cast')
    .then((movie)=>{
        res.render("movies/movie-details", {movie})
    })
    .catch((err)=>{
        console.log(err);
    })
})



module.exports = router;
