const express = require('express');
const router  = express.Router();
const Movies = require('../models/movies');

/* delete new celeb */
router.post('/deleteMovie/:id', (req, res, next) => {
    Movies.findByIdAndRemove(req.params.id)
    .then((data)=>{
      res.redirect('/movies');
      console.log("The received data from the DB: ", data);
    })
    .catch((err)=>{
      next(err);
    });
});

module.exports = router;