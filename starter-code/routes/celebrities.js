const express = require('express');
const router = express.Router();
const Celebrities = require('../models/celebrity');

router.get('/celebrities',(req,res,next) => {
    Celebrities.find()
      .then(celebrities => res.render("celebrities/index", { celebrities }) )
      .catch(err => { next(err) })
  
})

module.exports = router;