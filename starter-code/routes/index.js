const express = require('express')
const Celebrity = require('../models/Celebrity.model')
const Movie = require('../models/Movie.model')
const router = express.Router()

/* GET home page */
router.get('/', (req, res, next) => {
  Celebrity.find().then((celebrities) => res.render('index', { celebrities }))
  Movie.find().then((movies) => res.render('index', { movies }))
})

module.exports = router
