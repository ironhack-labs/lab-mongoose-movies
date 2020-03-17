const express = require('express');
const Celebrity =require('../models/Celebrity')
const celebrityRouter = express.Router()



celebrityRouter.get('/', (req, res, next) => {
    Celebrity.find()
      .then(allcelebritiesFromDB => {
        
        res.render('celebrities/index', { celebrities: allcelebritiesFromDB });
      })
      .catch(error => {
        console.log('Error while getting the celebrities from the DB: ', error);
      })
  });


  
  celebrityRouter.get('/new', (req, res, next) => {
    res.render("celebrities/new");
  });
  celebrityRouter.post('/new', (req, res, next) => {
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
  


  celebrityRouter.get('/show', (req, res, next) => {
    res.render("celebrities/show");
  });
  celebrityRouter.get('/:celebritiesId', (req, res, next) => {
    console.log(req.params.celebritiesId)
    Celebrity.findById(req.params.celebritiesId)
      .then(theCelebrities => {
        res.render('celebrities/show', { celebrities : theCelebrities });
      })
      .catch(error => {
        console.log('Error while retrieving book details: ', error);
      })
  });
  
  

  celebrityRouter.get('/delete/:celebritiesId', (req, res, next) => {
    console.log(req.params.celebritiesId)
    Celebrity.findByIdAndRemove(req.params.celebritiesId)
      .then(theCelebrities => {
        res.redirect('/celebrities');
      })
      .catch(error => {
        console.log('Error while retrieving celebrity details: ', error);
      })
  });
  
  
  module.exports = celebrityRouter
  