const express = require('express');
const router  = express.Router();
// const Celeb         = require("../models/celebrities")
 const Movie         = require("../models/movie")

router.get("/", (req, res, next) => {
  Movie.find({}).then(movies => {
    res.render("movies/index", {movies})
  })
})

// router.post("/", (req, res, next) => {
//  const {
//    name,
//    catchphrase,
//    occupation
//  } = req.body;

//   Celeb.create({name,catchphrase,occupation}).then(result => {
//     console.log(result);
//   res.redirect("/celebrities")}).catch(() =>
//   res.render("celebrities/new"))
// })

// router.get("/new", (req, res, next) => {
//   res.render("celebrities/new")
// })


 router.get("/:id", (req, res, next) => {
   const query = req.params.id;
   Movie.findById(query).then(movie => {
     res.render("movies/show", {movie})
   })
 })


// router.post("/:id/delete", (req, res, next) => {
//   Celeb.findByIdAndRemove(req.params.id).then(star => {
//     res.redirect("/celebrities")
//   })
// })

// router.get("/:id/edit", (req, res, next) => {
//   const query = req.params.id;

//   Celeb.findById(query).then(star =>
//   res.render("celebrities/edit", {
//     star : star,
//     edited : true,
//   }))
// })

// router.post("/:id", (req, res, next) => {
//   Celeb.findByIdAndUpdate(req.params.id, req.body, {new: true}).then(star => {
//     res.render("celebrities/show", {
//       star : star,
//       edited: true})
//   })
// })


module.exports = router;