const express = require('express');
const router  = express.Router();
const Celebrity = require('../models/Celebrity')

const ensureLogin = require("connect-ensure-login");


/* GET celebrites page */
router.get('/celebrities', ensureLogin.ensureLoggedIn(), (req, res, next) => {
  Celebrity.find()
  .then((theWholeDBArray)=>{
    res.render('celebrities/index', {allTheCelebs: theWholeDBArray})
  })
  .catch((err)=>{
    next(err);
  })
});


router.get('/celebrities/details/:id', (req, res, next) => {
  let celebID = req.params.id
  Celebrity.findById(celebID)
  .then((theSinlgeCeleb)=>{
    res.render('celebrities/show', {celebDeets: theSinlgeCeleb})
  })
  .catch((err)=>{
    next(err);
  })
});


router.get('/celebrities/new', (req, res, next)=> {
  res.render('celebrities/newCeleb');
})

router.post('/celebrities/create-new-celeb', (req, res, next)=>{
  const {name, occupation, catchPhrase} = req.body;
  // this is like saying
  // const title = req.body.title;
  // const descrtiption = req.body.descrition;
  // etc.
  let newCeleb = {name: name, occupation: occupation, catchPhrase: catchPhrase }
  Celebrity.create(newCeleb)
  .then((newlyCreatedCeleb)=>{
    req.flash('error', (`Successfully added profile for ${newlyCreatedCeleb.name}`))
      res.redirect(`/celebrities/details/${newlyCreatedCeleb._id}`)
      //what if I want to go to the page where it shows the individual celebrity? 
  })
  .catch((err)=>{
      res.render('celebrities/new')
      next(err);
  })
})

router.post('/celebrities/delete/:id', (req, res, next) => {
  Celebrity.findByIdAndRemove(req.params.id)
  .then((celebRemoved)=>{
    req.flash('error', (`Successfully deleted profile for ${celebRemoved.name}`))
    res.redirect('/celebrities');
  })
  .catch((err)=>{
    next(err);
  })
})




router.get('/celebrities/edit/:id', (req, res, next) => { //could I have done celeb/:id/edit?
  Celebrity.findById(req.params.id)
  .then((theCelebReturned)=>{
    res.render('celebrities/edit', {theCeleb: theCelebReturned});
  })
  .catch((err)=>{
    next(err);
  })
})

router.post('/celebrities/update/:id', (req, res, next) => {
  const theID = req.params.id;
  Celebrity.findByIdAndUpdate(theID, req.body) //what exactly does .body do?
  .then((newlyEditedCeleb)=>{
    req.flash('error', (`Successfully edited profile for ${newlyEditedCeleb.name}`))
    res.redirect(`/celebrities/details/${newlyEditedCeleb._id}`);
  })
  .catch((err)=>{
    next(err);
  })
})



module.exports = router;
