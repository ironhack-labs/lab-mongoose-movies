const express = require('express');
const router  = express.Router();
const Celeberty = require('../models/celeberty');


/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

//dispay nombres
router.get('/celebs', (req, res)=>{
  Celeberty.find({}).then(myCelebs => {
  res.render('celeberties', {celebs:myCelebs})
  }).catch(err => {console.log(err)})

})
// dsiplay details
router.get('/details/:id', (req, res, next)=>{
  Celeberty.findById(req.params.id).then(thisCeleb =>{
    // console.log(thisCeleb);
    res.render('celebDetails', {details:thisCeleb})
    }).catch(err => {
    console.log('Error while retrieving movie details: ', err);
  })
})
//add new
router.get('/celebs/new', (req, res)=>{
  res.render('new')
})

// catch add new
router.post('/celebrities/new',(req, res)=>{
  const newCeleb = {
    name: req.body.firstname,
    Occupation: req.body.Occupation,
    Phrase: req.body.Phrase
  }
  new Celeberty(newCeleb).save().then(celeb =>{
    res.redirect('/celebs')
  })
})


module.exports = router;
