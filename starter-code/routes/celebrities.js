const express = require('express');

//require celebrities model 
const router = express.Router();
const CelebrityModel = require('../models/celebrity');
const celebrity = require('../models/celebrity');


//display celebrities and list on localhost:3000/celebrities
router.get('/celebrities', (req,res, next) => {
    CelebrityModel.find()
    .then(allTheCelebritiesFromDB => {
        console.log(allTheCelebritiesFromDB)
        res.render('celebrities/index',{celebrities: allTheCelebritiesFromDB})
    })
    .catch(err=> {
        console.log(`Err While getting the Celebrities from the DB: ${err}`)
      })
})


//display celebrity details on /celebrities/:id
router.get('/celebrities/:id', (req,res,next) => {
    const { id } = req.params;
    console.log(id)
    CelebrityModel.findById(id)
    .then(allCelebrityDetails => {
        console.log(allCelebrityDetails)
        res.render('celebrities/show', {celebrityDetails: allCelebrityDetails})
    })
    .catch(err=> {
        console.log(`Err While getting the Celebrity Details from the DB: ${err}`)
    })
})


//new celebrity form
router.get('/new', (req,res) =>{
    res.render('celebrities/new')
})

router.post('/new', (req, res, next) => {
    const { name, occupation, catchPhrase} = req.body;
  
    CelebrityModel.create({name, occupation, catchPhrase})
    .then(() => 
    res.redirect('/celebrities'))
    .catch(error => 
      res.redirect('/new') 
      `Error while creating a new celebrity: ${error}`);
  });

  router.post('/celebrities/:id/delete', (req, res, next) => {
    const { id } = req.params;
  
    CelebrityModel.findByIdAndDelete(id)
    .then(() => res.redirect('/celebrities'))
    .catch(error => console.log(`Error while deleting a Celebrity: ${error}`));
  });

module.exports = router;
