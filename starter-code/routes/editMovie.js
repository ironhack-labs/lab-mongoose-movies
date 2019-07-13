const express = require('express');
const router  = express.Router();
const Movies = require('../models/movies');

/* delete new celeb */
router.post('/editMovie/:id', (req, res, next) => {
  console.log(req.params.id), req.body;
    Movies.findByIdAndUpdate(req.params.id, req.body)
    .then((data)=>{
      res.redirect('/movies');
      console.log("The received data from the DB: ", data);
    })
    .catch((err)=>{
      next(err);
    });
});

module.exports = router;