const express = require("express");
const router = express.Router();

const Movie = require("../models/movie");

//Show the list of the movies
router.get("/", (req, res) => {
  Movie.find().then((movies) => {
    console.log("All my movies" + movies);
    res.render("movies/index", { allMovies: movies });
  });
});

//Create a new movie
router.get("/new", (req, res) => {
  res.render("movies/new");
});
router.post("/new", (req, res) => {
  console.log(req.body);
  let movie = new Movie({
    title: req.body.title,
    genre: req.body.genre,
    plot: req.body.plot,
  });
  movie.save().then(() => {
    res.redirect("/movies");
  });
});

//Show the movie details
router.get("/:id", (req, res) => {
  Movie.findById(req.params.id).then((movie) => {
    res.render("movies/show", { movieDetails: movie });
  });
});
//Delete a movie
router.post('/:id/delete',(req,res)=>{
  Movie.findByIdAndDelete(req.params.id).then(()=>{
    res.redirect('/movies')
  })
})

//EDIT or UPDATE
router.get('/:id/edit',(req,res)=>{
  Movie.findById(req.params.id)
  .then((movie)=>{
    res.render('movies/edit',{myMovie:movie})
  })
})
router.post('/:id/edit',(req,res)=>{
  console.log(req.body);
  Movie.findByIdAndUpdate(req.params.id,
    {
      title:req.body.title,
      genre:req.body.genre,
      plot:req.body.plot
    }).then(()=>{
      res.redirect('/movies')
    })
  
})
module.exports = router;
