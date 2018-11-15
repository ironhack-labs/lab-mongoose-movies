const mongoose     = require('mongoose');
const express      = require('express')
const router       = express.Router();
const Celebrity    = require('../models/Celebrity');

router.get('/celebrities', (req, res, next) => {

  Celebrity.find()
.then((allCelebrities)=>{

  res.render('index', {theCelebs: allCelebrities});

})
.catch((err)=>{
  next(err);
})

  //res.render('celebrities')
})

router.get('/celebrities/:id', (req, res, next)=>{

  Celebrity.findById(req.params.id)

  .then((theCelebrity)=>{
    res.render('show', {celeb: theCelebrity})

  })
.catch((err)=>{
  next(err)
})
})

router.get('/new', (req, res, next)=>{
  res.render('new')
})




router.post('/celeb/create', (req, res, next)=>{
  Celebrity.create(req.body)
  .then((x)=>{
    console.log(x)
    res.redirect('/celebrities')

   })
   .catch((err)=>{
    next(err);
   })

})

router.post('/celeb/:id/delete', (req, res, next)=>{
  Celebrity.findByIdAndRemove(req.params.id)
  .then(()=>{
    res.redirect('/celebrities')
  })
  .catch((err)=>{
    next(err)
  })
})

module.exports = router;