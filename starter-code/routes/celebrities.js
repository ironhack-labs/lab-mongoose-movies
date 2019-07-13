const express = require('express');
const router  = express.Router();
const Celebs = require('../models/celebrity');

/* GET celebs page */
router.get('/celebrities', (req, res, next) => {
    Celebs.find()
    .then((data)=>{
      res.render('celebrities', {celebs: data});
      console.log("The received data from the DB: ", data);
    })
    .catch((err)=>{
      next(err);
    });
});

module.exports = router;