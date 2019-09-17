const express = require('express');
const router = express.Router();
const Celeb = require('../models/celebrity');



router.get('/', (req, res, next) => {
  Celeb.find()
  .then((allCelebs) => {
    res.render('celebrities/index', {allCelebs: allCelebs});
  })
  .catch((err) =>{
    next(err);
  })
})




router.get('/:id', (req, res, next) => {
  
  let id = req.params.id;
  
  Celeb.findById(id)
  .then((data) =>{
    res.render('celebrities/show', {celebDetails: data})
  })
  .catch((err)=>{
    next(err);
  })
})



router.get('/new', (req, res, next) => {
  res.render('celebrities/new')
})

module.exports = router;
