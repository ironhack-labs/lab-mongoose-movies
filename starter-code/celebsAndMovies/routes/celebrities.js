const express = require('express');
const router = express.Router();

const Celeb = require('../models/celeb');

/* GET celebs index page */
router.get('/index', (req, res, next) => {
  Celeb.find()
    .then((theCelebs) => {
      res.render('celebs/index', { theCelebs });
    })
    .catch((err) => {
      next(err);
    })
});

//THIS IS TO SHOW THE FORM TO CREATE A NEW CELEBRITY
router.get('/new', (req, res, next) => {
  res.render('celebs/new');
});

//THIS IS TO CREATE A NEW CELEBRITY
router.post('/create', (req, res, next) => {
  const newCeleb = new Celeb(req.body);
  newCeleb.save()
    .then((response) => {
      res.redirect('index');
    })
    .catch((err) => {
      console.log(err);
      next(err);
    })
});

//THIS IS TO SHOW THE DETAILS OF AN SPECIFIC CELEBRITY
//THIS ROUTE IS AT THE BOTTOM BECAUSE IT USES '/:id'
router.get('/:id', (req, res, next) => {
  Celeb.findById(req.params.id)
    .then((theCeleb) => {
      res.render('celebs/show', theCeleb);
    })
    .catch((err) => {
      next(err);
    })
});



module.exports = router;