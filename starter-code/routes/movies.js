const express = require('express');
const router  = express.Router();
// const Celeb         = require("../models/celebrities")
 const Movie         = require("../models/movie")

router.get("/", (req, res, next) => {
  Movie.find({}).then(movies => {
    res.render("movies/index", {movies})
  })
})

 router.post("/", (req, res, next) => {
  const {
    title,
    genre,
    plot
  } = req.body;

   Movie.create({title,genre,plot}).then(result => {
   res.redirect("/movies")}).catch(() =>
   res.render("movies/new"))
 })

 router.get("/new", (req, res, next) => {
   res.render("movies/new")
 })


 router.get("/:id", (req, res, next) => {
   const query = req.params.id;
   Movie.findById(query).then(movie => {
     res.render("movies/show", {movie})
   })
 })


 router.post("/:id/delete", (req, res, next) => {
   Movie.findByIdAndRemove(req.params.id).then(movie => {
     res.redirect("/movies")
   })
 })

 router.get("/:id/edit", (req, res, next) => {
   const query = req.params.id;

   Movie.findById(query).then(movie =>
   res.render("movies/edit", {
     movie : movie,
     edited : true,
   }))
 })

 router.post("/:id", (req, res, next) => {
   Movie.findByIdAndUpdate(req.params.id, req.body, {new: true}).then(movie => {
     res.render("movies/show", {
       movie : movie,
       edited: true})
   })
 })


module.exports = router;