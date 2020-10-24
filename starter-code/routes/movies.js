const express = require('express');
const Movie = require('../models/Movie');
const router = express.Router();

/* GET movies page */
router.get('/', (req, res, next) => {
  Movie.find()
    .then(movies => {
      console.log(movies)
      res.render('movies/movies', { movies })
    })
    .catch(error => {
      console.log(error)
    })
});

router.get('/show-movies/:id', (req, res, next) => {
    const { id } = req.params
    Movie.findById(id)
        .then(result => {
            console.log(result)
            res.render('movies/show-movies', result)
        })
})

router.get('/add-new-movie', (req, res, next) => {
    res.render('movies/add-new-movie')
})

router.post('/add-new-movie', (req, res, next) => {
    console.log(req.body)
    const { title, genre, plot } = req.body

    Movie.create({
        title,
        genre,
        plot
    })
        .then(() => {
            res.redirect('/movies')
        })
        .catch(err => {
            next(err)
        })
})

router.get('/edit-movie/:id', (req, res, next) => {
    Movie.findById(req.params.id)
      .then(movies => {
        res.render('movies/edit-movies', movies)
      })
      .catch(err => {
        next(err)
      })
  })
  
  router.post('/edit-movie/:id', (req, res, next) => {
    const {title, genre, plot} = req.body
    Movie.findByIdAndUpdate({_id: req.params.id}, {$set: {title, genre, plot}}, {new: true})
      .then(weather => {
        console.log(movies)
       res.redirect('/movies' + req.params.id)
  
      })
      .catch(err => {
        next(err)
      })
  })

router.get('/delete/:id', (req, res, next) => {
    Movie.deleteOne({_id: req.params.id})
    .then(result => {
        res.redirect('/movies')
    })
    .catch(err => {
        next(err)
    })
})

module.exports = router;