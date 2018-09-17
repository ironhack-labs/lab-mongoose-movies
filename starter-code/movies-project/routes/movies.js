const router = require('./index');
const mongoose = require('mongoose');
const Movie = require('../models/movie.js');


router.get('/movies', (req, res, next) => {
  Movie.find({})
    .then(movies => {
      res.render('movies/index', { movies })
    })
    .catch(e => console.log(e))
})

router.get('/movies/new', (req, res, next) => {
  res.render('./movies/new')
})

router.get('/movies/:id', (req, res, next) => {  //DETAILS menu
  let id = req.params.id;
  Movie.findById({ _id: id })
    .then(movie => {
      //console.log(movie)
      res.render('./movies/show', { movie })
        .catch(e => console.log(e))
    })
})

router.post('/movies', (req, res, next) => {
  let data = req.body;
  let movie = new Movie({ title: data.title, genre: data.genre, plot: data.plot })
  movie.save()
    .then(() => res.redirect('/movies'))
    .catch(() => res.render('/movies/new'))
})


module.exports = router;