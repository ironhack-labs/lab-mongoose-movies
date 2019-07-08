const express = require('express');
const router  = express.Router();
const Movies = require('../models/movies');
const Celebs = require('../models/celebrity');

/* GET celebs page */
router.get('/movies', (req, res, next) => {
    Movies.find().populate('actor')
    .then((data)=>{
      Celebs.find().then((celebData)=>{
        res.render('movies', {movies: data, actors: celebData});
        console.log("The received data from the DB: ", data);
      }).catch(()=>{
        console.log("The received data from the DB: ", data);
      });
    })
    .catch((err)=>{
      next(err);
    });
});

module.exports = router;