const express = require('express');
const router  = express.Router();

const Celebrity = require('../models/celebrity-model');

router.get('/new', (req, res, next) => {
  res.render('celebrity-views/new-celebrity');
});

router.post('/create', (req,res,next)=> {
  
  Celebrity.create(req.body)
  .then(newCelebrity => {
    res.redirect('/celebrity/celebrities')
    console.log("New Celebrity Created : ", newCelebrity)
  })
  .catch(err => console.log("Error while creating new Celebrity: ", err))
})

router.get('/celebrities', (req,res,next)=> {
  Celebrity.find()
  .then(allCelebrities => {
    res.render('celebrity-views/all-celebrities', { celebrities: allCelebrities})
  })
  .catch(err => console.log("Error while getting celebrities: ", err))
})






module.exports = router;