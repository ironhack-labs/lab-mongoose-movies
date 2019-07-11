const express = require('express');
const router  = express.Router();
const Movies = require('../models/movies');

/* create new movie with AJAX AXIOS */
router.post('/ajaxCreateMovie', (req, res, next) => {
    Movies.create(req.body)
    .then((data)=>{
      res.json(data);
      console.log("The received data from the DB: ", data);
    })
    .catch((err)=>{
      next(err);
    });
});

module.exports = router;