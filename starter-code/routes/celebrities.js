const express = require('express');
const router  = express.Router();
const Celebrity = require('../models/Celebrity');

router.get('/index', (req, res, next)=>{

  Celebrity.find()
  .then(allCelebs=>{
      res.render('celebrities/index', {celebs: allCelebs})
  })
  .catch((err)=>{
      next(err);
  })

})

module.exports = router;