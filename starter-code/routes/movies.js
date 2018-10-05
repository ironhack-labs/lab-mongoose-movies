const
  express = require('express'),
  router  = express.Router(),
  Movies  = require(`../models/Movie`)
;

router.get(`/movies`, (req,res) => {
  const
    data = {
      title: `Movies`,
      h1: `Movies`
    }
  ;
  Movies
    .find()
    .then( movies => res.render(`movies/index`, {movies, data}) )
  ;
});

router.post(`/movies`, (req,res) => {
  Movies
    .create(req.body)
    .then( () => res.redirect(`/movies`) )
  ;
});

router.get(`/movies/new`, (req,res) => {
  const
    data = {
      title: `Create movie`,
      h1: `Create new movie`
    }
  ;
  res.render(`movies/new`, {data});
});

router.get(`/movies/:id`, (req,res) => {
  Movies
    .findById(req.params.id)
    .then( movie => {
      const
        data = {
          title: movie.title,
          h1: movie.title,
        }
      ;
      res.render(`movies/show`, {movie, data}) 
    })
  ;
});

router.post(`/movies/:id`, (req,res) => {
  Movies
    .findByIdAndUpdate(req.params.id, {$set: req.body})
    .then( () => res.redirect(`/movies`) )
  ;
});

router.post(`/movies/:id/delete`, (req,res) => {
  Movies
    .findByIdAndRemove(req.params.id)
    .then( () => res.redirect(`/movies`) )
  ;
});

router.get(`/movies/:id/edit`, (req,res) => {
  Movies
    .findById(req.params.id)
    .then( movie => {
      const
        data = {
          title: `Edit movie`,
          h1: `Edit ${movie.title}`
        }
      ;
      res.render(`movies/edit`, {movie, data}) 
    })
  ;
})

module.exports = router;