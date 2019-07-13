const express = require('express');
const router  = express.Router();
const Movies = require('../models/movies');

/* create new celeb */
router.post('/createMovie', (req, res, next) => {
    Movies.create(req.body)
    .then((data)=>{
      res.redirect('/movies');
      console.log("The received data from the DB: ", data);
    })
    .catch((err)=>{
      next(err);
    });
});

module.exports = router;