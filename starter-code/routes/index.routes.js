const express = require('express')
const Celebrity = require('../models/Celebrity.model')
const Movie = require('../models/Movie.model')
const router = express.Router()

/* GET home page */
router.get('/', (req, res, next) => {
  Celebrity.find()
    .sort({ created_at: -1 })
    .limit(3)
    .then((celebrities) => {
      Movie.find()
        .sort({ created_at: -1 })
        .limit(3)
        .then((movies) => {
          res.render('index', {
            celebrities: celebrities,
            movies: movies
          })
        })
    })
})

module.exports = router
