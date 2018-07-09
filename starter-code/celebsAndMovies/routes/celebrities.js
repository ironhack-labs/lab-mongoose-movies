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

router.post('/create', (req, res, next) => {
  onsole.log("entre");
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

router.get('/new', (req, res, next) => {
  res.render('celebs/new');
});

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