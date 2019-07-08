const express = require('express');
const celebrityRouter  = express.Router();
const Celebrity = require('../models/Celebrity');



celebrityRouter.get('/celebrities/', (req, res, next) => {
  
  Celebrity.find()
  .then((theThingWeGetBackFromDB)=>{
    res.render('celebrities', {allTheCelebrities: theThingWeGetBackFromDB})
  })
  .catch((err)=>{
    next(err);  
  })
  
});




celebrityRouter.get('/celebrities/new', (req, res, next)=>{
  res.render('celebrities/new');
});


celebrityRouter.post('/celebrities', (req, res, next)=>{
  const {theName, theOccupation, theCatchPhrase} = req.body;
  let newCelebrity = {name: theName, occupation: theOccupation, catchPhrase: theCatchPhrase}
  Celebrity.create(newCelebrity)
  .then (()=>{
    res.redirect('celebrities')
  })
  .catch ((err)=>{
    res.render('celebrities/new')
    next(err);
  })
});


celebrityRouter.get('/celebrities/:id', (req, res, next)=>{
  
  let theID = req.params.id;
  Celebrity.findById(theID)
  .then((oneSingleCelebrity)=>{
    res.render('celebrities/show', {theCelebrity: oneSingleCelebrity})
  })
  .catch((err)=>{
    next(err);
  })
});


celebrityRouter.post('/celebrities/:id/delete', (req, res, next)=>{
  Celebrity.findByIdAndRemove(req.params.id)
  .then (()=>{
    res.redirect('/celebrities')
  })
  .catch ((err)=>{
    next(err);
  })
});



celebrityRouter.get('/celebrities/:id/edit', (req, res, next)=>{
  Celebrity.findById(req.params.id)
  .then((celebrityFromDb)=>{
    res.render('celebrities/edit', {celebrity: celebrityFromDb})
  .catch((err)=>{
    next(err);
  })
  })
});

celebrityRouter.post('/celebrities/:id', (req, res, next)=>{
  let theID = req.params.id
  Celebrity.findByIdAndUpdate(theID, req.body)
  .then(()=>{
    res.redirect('/celebrities/');
  })
  .catch((err)=>{
    next(err);
  })
});


module.exports = celebrityRouter;