const express = require("express")

const Movie = require("../models/Movie.model")

const router = express.Router()

router.get("/movies", (req, res, next) => {
  Movie.find()
    .then((movies) => {
      res.render("movies/index", { movies })
    })
    .catch((error) => console.log("error looking for movies", error))
})

router.get('/movies/new', (req,res,next)=>{
    res.render('movies/new');
})

router.post('/movies/new',(req,res,next) => {
    const newMovie = new Movie(req.body);
    newMovie.save()
    .then(()=> res.redirect('/movies'))
    .catch((error) => res.render('movies/new'));
})

router.get("/movies/:id", (req, res, next) => {
  Movie.findById(req.params.id)
    .then((movie) => {
      res.render("movies/show", movie)
    })
    .catch((error) => console.log(error))
})

router.get("/movies/:id/delete", (req, res, next) => {
    Movie.findByIdAndRemove(req.params.id)
      .then(() => {
        res.redirect("/movies")
      })
      .catch((error) => console.log(error))
  })

module.exports = router
