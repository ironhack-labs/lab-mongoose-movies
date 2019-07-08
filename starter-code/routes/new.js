const express = require('express');
const router  = express.Router();
const Celebs = require('../models/celebrity');

/* create new celeb */
router.post('/new', (req, res, next) => {
    Celebs.create(req.body)
    .then((data)=>{
      res.redirect('/celebrities');
      console.log("The received data from the DB: ", data);
    })
    .catch((err)=>{
      next(err);
    });
});

module.exports = router;