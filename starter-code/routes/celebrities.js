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

router.get('/show/:id', (req, res, next)=>{
  let id = req.params.id;
  Celebrity.findById(id)
  .then(celeb =>{
      res.render('celebrities/show', {celeb: celeb})
  })
  .catch((err)=>{
      next(err);
  })

})

module.exports = router;