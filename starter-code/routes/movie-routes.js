const express = require("express");
const router = express.Router();
const Movie = require("../models/movie");
const seed = require("../bin/seeds");


//list all movies
router.get("/movies/allMovies", (req, res, next) => {

  Movie.find()

    .then(result => {

      console.log(result);

      res.render("movies/allMovies", { showAllMovies: result });
    })

    .catch(err => next(err));
});

// details of one movie
router.get("/movies/details/:id", (req, res, next) => {
  let id = req.params.id;
  console.log(id);
  Movie.findById(id)
    .then(result => {
      console.log(result);

      res.render("movies/details", { showDetails: result });
    })
    .catch(err => next(err));
});

// get route for new movie
router.get("/movies/new", (req, res, next) => {
  console.log("===========this is the new movies route=========");
  Movie.find()
    .then(result => {
      // console.log("this is the result");

      res.render("movies/newMovie/new", { newMovie: result });
    })
    .catch(err => next(err));
});

// POST route to create a new movie
router.post("/movies/create", (req, res, next) => {
  console.log(req.body);
  console.log("this is the new movies route");

  let title = req.body.theTitle;
  let genre = req.body.theGenre;
  let plot = req.body.thePlot;

  Movie.create({
    title: title,
    genre: genre,
    plot: plot
  })

    // Celebrity.find()
    .then(result => {
      // console.log(result)
      console.log("this is the result");
      console.log(result);
      res.redirect("/movies/allMovies");
    })
    .catch(err => next(err));
});


//edit movies
router.get("/movies/edit/:id", (req, res, next) => {
  let id = req.params.id;
  // console.log(id);
  Movie.findById(id)
    .then(result => {
      res.render("movies/edit", {updatedMovie: result});
    })
    .catch((err) => {
      next(err)
  })
})

// save edits
router.post("/movies/update/:id", (req,res,next)=>{

  let id = req.params.id;
  console.log(id)
  console.log(req.body)
  
  
  let title = req.body.theTitle;
  let genre = req.body.theGenre;
  let plot = req.body.thePlot;

  Movie.findByIdAndUpdate(id, 
    {
      title: title,
      genre: genre,
      plot: plot
    })
  .then(result => {
    res.redirect("/movies/allMovies")
  })
  .catch((err) => {
    next(err)
})
})

// delete celeb
router.post("/movies/delete/:id", (req, res, next) => {
  let id = req.params.id;
  
  Movie.findByIdAndRemove(id)
  .then(result => {
    
      res.redirect("/movies/allMovies");
    })
    
    .catch(err => {
      next(err);
    })
  })


module.exports = router;