const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie.js')
const Celebrities = require('../models/Celebrity')

router.get('/', (req, res, next) => {

  Movie.find().then(data => {
    res.render('movies/index', {movies: data})
  }).catch(err => next(err))
})

router.get("/details/:id", (req,res,next) => {

  let id = req.params.id

  Movie.findById(id).populate('actors')
  .then(data => {
    res.render('movies/details', {movie: data})
  }).catch(err => next(err))
})

router.get("/new", (req,res,next) => {
  Celebrities.find().then(data => {
    res.render("movies/new", {actors: data})
  })
})

router.post("/create", (req,res,next) => {
  let movie = {
    title: req.body.title,
    genre: req.body.genre,
    plot: req.body.plot,
    image: req.body.image,
    actors: req.body.actors
  }

  Movie.create(movie).then(data => {

    let actors = data.actors

    if (Array.isArray(actors)) {
      actors.forEach(actor => {

        Celebrities.findByIdAndUpdate(actor, 
          {$push: {movies: data.id}}).then(() => {
            res.redirect(`/movies/details/${data.id}`)
          }).catch(err => next(err))
      })
    }
    else {
      Celebrities.findByIdAndUpdate(actors, 
         { $push: {movies: data.id}}
         )
         .then(()=>{
           res.redirect(`/movies/details/${data._id}`)
         }).catch(()=>{})
    }

  }).catch(err => next(err))
})

router.post("/delete/:id", (req,res,next) => {
  let id = req.params.id

  Movie.findByIdAndDelete(id).then((data) => {

    Celebrities.findByIdAndUpdate(data.actors, 
      { $pull: {movies: id} }
      )
      .then(() => {
        res.redirect("/movies")
      }).catch(err => next(err))
  }).catch(err => next(err))

  
})

router.get("/edit/:id", (req,res,next) => {
  let id = req.params.id

  Movie.findById(id).then(data => {
    Celebrities.find().then(celebs => {
      res.render("movies/edit", {movie: data, actors: celebs })
    }).catch(err => next(err))
  }).catch(err => next(err))
})


router.post('/update/:id', (req,res,next) => {
  console.log(req.params)
  let id = req.params.id
  let title = req.body.title;
  let genre = req.body.genre;
  let plot = req.body.plot;
  let image = req.body.image;
  let actors = req.body.actors;


  console.log(`before movie update: ${actors}, movie id = ${id}`)

  // having an issue with update, needing to update all but to push actor.
  Movie.findByIdAndUpdate(id, {
      title: title,
      genre: genre,
      plot: plot,
      image: image,
      actors: actors}).then(data => {

        console.log(`actors: ${actors}, movie: ${id}`)

        if (Array.isArray(actors)) {
          actors.forEach(actor => {
    
            Celebrities.findByIdAndUpdate(actor, 
              {$push: {movies: id}}).then(() => {
                res.redirect(`/movies`)
              }).catch(err => next(err))
          })
        }
        else {
          Celebrities.findByIdAndUpdate(actors, 
             { $push: {movies: id}})
             .then(()=>{
               res.redirect(`/movies`)
             }).catch(()=>{})
        }
  }).catch(err => next(err))
})


module.exports = router;