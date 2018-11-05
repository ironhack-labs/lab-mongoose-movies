const express = require('express');
const router  = express.Router();
const Celebrity = require('../models/Celebrity.js');
const MovCeleb = require('../models/MovCeleb.js');
const Movie = require('../models/Movie.js');
const ObjectId = require('mongodb').ObjectID;

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

// /celebrity GET page

router.get('/celebrities', (req,res,next) => {
  Celebrity.find()
  .then(celebrities=>{
    res.render('celebrities',{celebrities})
  })
  .catch(err => {
    next()
  })
})


router.get('/celebrities/:id', (req,res,next) => {
  let id = req.params.id;
  Celebrity.findById(id)

  .then(celebrities =>{
    MovCeleb.find({
      _actors: ObjectId(id)
    })
    .populate('_movie')
    .then(movcelebs =>{
      console.log('CELEB', movcelebs)
      res.render('show',{celebrities,movcelebs})
    })

  })
  })


// /add-new GET page

router.get('/add-new', (req,res,next)=>{
  res.render('add-new')
});

router.post('/add-new', (req,res,next)=>{
  Celebrity.create({
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase
  })
  .then(celebrities => {
    res.render('show-new',{celebrities})
  })
})

// delete celebs

router.get('/celebrities/:id/delete', (req,res,next) => {
  let id = req.params.id;
  Celebrity.findByIdAndDelete(id)
  .then(celebrities =>{
    res.render('show-new',{celebrities})
  })
})

// edit celebs

router.get('/celebrities/:id/edit', (req,res,next)=>{
  Celebrity.findById(req.params.id)
  .then(celebrities =>{

    res.render('edit', {celebrities})
  })
});

router.post('/celebrities/:id', (req,res,next) => {
  let id = req.params.id;
  Celebrity.findByIdAndUpdate(id,     
    {name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase
  })
  .then(celebrities =>{
    res.redirect('/celebrities/' +celebrities._id)
  })
})


module.exports = router;
