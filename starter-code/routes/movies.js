const express = require("express");
const router = express.Router();
const Movies = require("../models/movies")
const CelebertyMovie = require("../models/celebertyMovie")
const Celeberties = require("../models/celeberty")


router.get("/movies", (req, res) => {
  Movies.find()
  .then(movie => {
    res.render ("movies/movies", {movie})
  })
})


router.get("/movies/search", (req, res) => {
  Movies.find()
  .then (movie => {
    res.render("movies/search", {movie})
  })
})
router.post("/movies/search", (req, res) => {
  // console.log("Test", req.body.movie)

  movieGenre = req.body.movie
 let genrePromise = Movies.find({genre: movieGenre})
  
let allMovies = Movies.find()

Promise.all([genrePromise, allMovies])
.then (values => {
  let movie = values[1];
  let genre = values[0]
  res.render("movies/search", {movie, genre})
})


})

router.get("/movies/:id/add-actor", (req, res) => {
  let id = req.params.id
  let celebertyPromise = Celeberties.find()
  let moviePromise = Movies.findById(id)
  Promise.all([celebertyPromise, moviePromise])
  .then (values => { 
    let celeberty = values[0];
    let movie = values[1]
      res.render ("movies/add-actor", {celeberty, movie})
    })
  })

router.post("/movies/:id/add-actor", (req, res) => {
  let id = req.params.id

  Movies.findById(id)
  .then (movie => {
    CelebertyMovie.findOne({_movieId: movie._id})
    .then(existingMovie => {
        if (existingMovie) {
          console.log(existingMovie)
          res.redirect("/") 
        }
  })
  Movies.findById(id)
  .then (movie => {
    CelebertyMovie.create({
      _movieId : movie._id,
      _celebertyId: req.body._celebertyId
    })
    res.redirect("/movies")

  })
  
})
  


})


 

router.get("/new-movie", (req, res) => {
  Celeberties.find()
  .then (celeberty => {
    res.render ("movies/new-movie", {celeberty})
  })
})

router.post("/new-movie", (req, res) => {
  let newMovie = req.body
  if ((newMovie.title) && (newMovie.genre) && (newMovie.plot)) {
    Movies.create({
    title: newMovie.title,
    genre: newMovie.genre,
    plot: newMovie.plot
  })
  .then (movie => {
      CelebertyMovie.create({
      _movieId : movie._id,
      _celebertyId: newMovie._celeberty
  })
  res.redirect("/movies")})
} else {
  res.render("movies/new-movie", {falseInput: true})
}
})


router.get("/movies/:id/delete", (req, res) => {
  let id = req.params.id
  Movies.findByIdAndDelete(id)
  .then (movie => {
  res.redirect ("/movies")
  })
})


router.get("/movies/:id/edit-movie", (req, res) => {
  let id = req.params.id;
  Movies.findById(id)
  .then (movie => {
    CelebertyMovie.find({_movieId: id})
    .then (celeberty => {
      res.render ("movies/edit-movie", {movie})
    })
  })
})


router.post("/movies/:id/edit-movie", (req, res) => {
let editMovie = req.body
let id = req.params.id

if ((editMovie.title) && (editMovie.genre) && (editMovie.plot)) {
Movies.findByIdAndUpdate(id, {
    title: editMovie.title,
    genre: editMovie.genre,
    plot: editMovie.plot
  })
.then((movie => {
  res.redirect("/movies")
}))
} else {
  Movies.findById(id)
  .then ((movie => {
    res.render("movies/edit-movie",
    {falseInput: true, movie: movie })
  }))
}
})

router.get("/movies/:id", (req, res) => {
  let id = req.params.id
   CelebertyMovie.find({_movieId: id})
  .populate("_celebertyId")
  .then (celeberty => { 
    Movies.findById(id)
    .then(movie => {
      res.render ("movies/movieDetail", {movie, celeberty})
    })
  })
})



module.exports = router;