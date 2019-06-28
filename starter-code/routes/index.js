const express = require('express');
const router  = express.Router();

const {findCelebrities}= require('../controllers/celebrities.controllers')
const {findMovies}= require('../controllers/movies.controller')

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

//GET Movies
router.get('/movies',findMovies)
//GET Celebrities
router.get('/celebrities',findCelebrities)

module.exports = router;
