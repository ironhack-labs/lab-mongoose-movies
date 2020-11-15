const express = require('express');
const Movie = require('../models/movie');
const router  = express.Router();

router.get('/movies', (req, res, next) => {

    Movie.find({}, {title:1})
    .then((movies)=>{
      res.render('movies/index', {movies});
    })
    .catch((err)=>{
      console.log(err)
      res.send(err)
    })
  });

router.post('/movies', (req,res,next)=>{

    Movie.create(req.body)
        .then(()=>{
            res.redirect('/movies')
        })
        .catch((err)=>{
            console.log(err)
            res.render('movies/new')
        })
})

router.get('/movies/new', (req,res,next)=>{
    res.render('movies/new')
})

router.get('/movies/:id', (req,res,next)=>{
    const movieId = req.params.id

    Movie.findById(movieId)
    .then((result)=>{
        res.render('movies/show', result)
    })
    .catch((err)=>{
        console.log(err)
        res.send(err)
    })
    
})

router.post('/movies/:id', (req,res,next)=>{
    const id = req.params.id
    const editedMovie = req.body
    Movie.findByIdAndUpdate(id, editedMovie)
        .then(()=>{
            res.redirect(`/movies/${id}`)
        })
        .catch((err)=>{
            console.log(err)
            res.send(err)
        })
})

router.post('/movies/:id/delete', (req,res,next)=>{
    const movieId = req.params.id

    Movie.findByIdAndDelete(movieId)
    .then(()=>{
        res.redirect('/movies')
    })
    .catch((err)=>{
        console.log(err)
        res.send(err)
    })
})

router.get('/movies/:id/edit', (req,res,next)=>{
    const movieId = req.params.id
    Movie.findById(movieId)
    .then((result)=>{
        res.render('movies/edit', result)
    })
    .catch((err)=>{
        console.log(err)
        res.send(err)
    })
})


module.exports = router;