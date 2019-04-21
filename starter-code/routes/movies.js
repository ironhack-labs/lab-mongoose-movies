const express   = require('express');
const router    = express.Router();
const Movie = require('../models/Movie')


router.get('/', (req, res, next) => {
  Movie.find()
    .then(movies => {
      res.render('movies/index', { movies });
    })
    .catch(err => {
      res.send(err)
    })
});

router.get('/:id', (req,res) => {
  const { id } = req.params
  Movie.findById(id)
    .then(movie => {
      res.render('movies/show', movie)
    })
    .catch(err => {res.send(err)})
})

module.exports = router