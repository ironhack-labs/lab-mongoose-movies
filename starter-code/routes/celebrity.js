const express = require('express');
const router  = express.Router();
const Celebs = require('../models/celebrity');

/* GET celebs page */
router.get('/celebrity/:id', (req, res, next) => {
    Celebs.findById(req.params.id)
    .then((data)=>{
      res.render('celebrity', {celeb: data});
      console.log("The received data from the DB: ", data);
    })
    .catch((err)=>{
      next(err);
    });
});

module.exports = router;