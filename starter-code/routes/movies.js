var express = require('express');
var router = express.Router();
const Movies = require('../models/movie')


/* GET movies listing. */
router.get('/', function(req, res, next) {
  Movies.find({})
  .then(movies=>{
    console.log(movies)
    res.render('movies/index', {movies});
  })
  .catch(error=>{
    next(error)
  })
});

module.exports = router;
