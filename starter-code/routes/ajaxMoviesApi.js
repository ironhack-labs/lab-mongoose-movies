const express = require('express');
const router  = express.Router();
const Movies = require('../models/movies');

/* GET celebs page */
router.get('/ajaxMoviesApi', (req, res, next) => {
   Movies.find().populate('actor')
    .then((data)=>{
      res.json(data);
      console.log("The received data from the DB: ", data);
    })
    .catch((err)=>{
      next(err);
    });
});

module.exports = router;