const express = require('express');
const celebRouter = express.Router();

const Celeb = require('../models/celeb');

//READ: GET MOVIES FROM DATABASE AND DISPLAY
celebRouter.get('/celebs/index', (req, res, next) => {
  Celeb.find()
    .then((theCelebs) => {
      res.render('celebs/index', { theCelebs });
    })
    .catch((err) => {
      next(err);
    })
});


//CREATE: RENDER FORM TO FILL AND CREATE MOVIE
//THIS IS TO SHOW THE FORM TO CREATE A NEW CELEBRITY
celebRouter.get('/celebs/new', (req, res, next) => {
  res.render('celebs/new');
});


//CREATE: SEND FILLED FORM WITH DATA(req.body) AND SAVE IN DATABASE
celebRouter.post('/celebs/create', (req, res, next) => {
  const newCeleb = new Celeb(req.body);
  newCeleb.save()
  .then((response) => {
    res.redirect('/celebs/index');
  })
  .catch((err) => {
    console.log(err);
    next(err);
  })
});


//UPDATE: RENDER FORM PREFILLED AND EDIT IN DATABASE
celebRouter.get('/celebs/:id/edit', (req, res, next) => {

  Celeb.findById(req.params.id)
  .then((theCeleb) => {
    res.render('celebs/edit-celeb', theCeleb);
  })
  .catch((err) => {
    next(err);
  })
});


//UPDATE: SEND THE NEW INFO TO DATABASE TO UPDATE
celebRouter.post('/celebs/:id/update', (req, res, next) => {
  console.log("ddddd");
  Celeb.findOneAndUpdate({_id : req.params.id},req.body)
  .then((response) => {
    res.redirect('/celebs/index');
  })
  .catch((err) => {
    console.log(err);
    next(err);
  })
});

//DELETE
celebRouter.post('/celebs/:id/delete', (req, res, next) => {
  Celeb.findByIdAndRemove(req.params.id)
  .then((response) => {
    res.redirect('/celebs/index');
  })
  .catch((err) => {
    console.log(err);
    next(err);
  })
});


//READ: SHOW AN SPECIFIC CELEB
//THIS ROUTE IS AT THE BOTTOM BECAUSE IT USES '/:id'
celebRouter.get('/celebs/:id', (req, res, next) => {
  Celeb.findById(req.params.id)
    .then((theCeleb) => {
      res.render('celebs/show', theCeleb);
    })
    .catch((err) => {
      next(err);
    })
});



module.exports = celebRouter;