const express = require('express');
const router  = express.Router();

const Movies = require('../models/movies');

router.get('/', (req, res, next) => {
  Movies.find()
          // -> allTheBooksFromDB is a placeholder, it can be any word
         // 
    .then(data => {
      //console.log('Retrieved celebrities from DB:', data);
      res.render('movies/index', { movies: data });
    })
    .catch(error => {
      console.log('Error while getting the movies from the DB: ', error);
    })
  //res.render('index');
});

module.exports = router;