const express = require('express');
const router  = express.Router();

const Celeb    = require('../models/celeb');

/* GET celebs index page */
router.get('/', (req, res, next) => {
  Celeb.find()
  .then((theCelebs)=>{
    res.render('celebs/index',{theCelebs});


  })
});

module.exports = router;