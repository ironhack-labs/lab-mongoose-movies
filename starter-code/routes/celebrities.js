
const Celebrity = require('../models/Celebrity');
const express = require('express');
const celebritiesRouter  = express.Router();

celebritiesRouter.get('/', (req, res, next) => {
    Celebrity.find()
      .then(allTheCelebrityFromDB => {
         console.log('Retrieved celebrities from DB:', allTheCelebrityFromDB);
        res.render('celebrities/index', { celebrities: allTheCelebrityFromDB });
      })
      .catch(error => {
        console.log('Error while getting the celebrity from the DB: ', error);
      })
  });
  
  celebritiesRouter.get('/new', (req, res, next) => {
    res.render("celebrities/new");
  });
  
  
  celebritiesRouter.post('/new', (req, res, next) => {
    const { name, occupation, catchPhrase} = req.body;
    const newCelebrity = new Celebrity({ name, occupation, catchPhrase})
    newCelebrity.save()
    .then((celebrity) => {
      res.redirect('/celebrities');
    })
    .catch((error) => {
      console.log(error);
    })
  });
  
  
  celebritiesRouter.get('/show', (req, res, next) => {
    res.render("celebrities/show");
  });
  
  
  celebritiesRouter.get('/:celebritiesId', (req, res, next) => {
    console.log(req.params.celebritiesId)
    Celebrity.findById(req.params.celebritiesId)
      .then(theCelebrities => {
        res.render('celebrities/show', { celebrities : theCelebrities });
      })
      .catch(error => {
        console.log('Error while retrieving celebrity details: ', error);
      })
  });
  
 
  
  celebritiesRouter.get('/delete/:celebritiesId', (req, res, next) => {
    console.log(req.params.celebritiesId)
    Celebrity.findByIdAndRemove(req.params.celebritiesId)
      .then(theCelebrities => {
        res.redirect('/celebrities');
      })
      .catch(error => {
        console.log('Error while retrieving celebrity details: ', error);
      })
  });

  module.exports = celebritiesRouter;
  





