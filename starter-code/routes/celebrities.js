const express = require('express');

const Celebrity = require('../models/Celebrity.js')

const router = express.Router();


router.get('/', (req, res, next) => {
  Celebrity.find({},(err, response) => {
    console.log(response)
    celebrityArray = response
    res.render("celebrities/index", {celebrities: celebrityArray})
  }).catch( (err) => {
    next();
    console.log(err);
  })
});

router.get('/:id', (req,res)=>{
  const id = req.params.id;
  Celebrity.findById(id, (err, celeb)=>{
    res.render('celebrities/show',{celebrity: celeb})
  }).catch( (err) => {
    next();
    console.log(err);
  })
});

router.get('celebrities/new', (req, res, next) => {
  res.render('celebrities/new')
})
module.exports = router;
