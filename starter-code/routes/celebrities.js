const express = require('express');
const router  = express.Router();
const Celeb = require("../models/celebrity.js");

router.get('/celebrities', (req, res, next) => {
  Celeb.find()
  .then(celeb => res.render('celebrities/index', {celeb}))
  .catch(err => console.log(err))
});

router.get('/celebrities/:id', (req, res, next) => {
  Celeb.findById(req.params.id)
  .then(celeb => res.render('celebrities/show', {celeb}))
  .catch(err => {
    console.log(err)
    next();
  })
});

router.get('/celebrities/new', (req, res, next) => {
  res.render('celebrities/new');
});

router.get('/celebrities/:id/edit', (req, res, next) => {
  Celeb.findById(req.params.id)
  .then(celeb => res.render("celebrities/edit",{celeb}))
  .catch(err => console.log(err))
});

router.post('/celebrities', (req, res, next) => {
  Celeb.create({name: req.body.name, occupation: req.body.occ, catchPhrase: req.body.catch})
  .then(celeb => res.redirect("/celebrities"))
  .catch(err => {
    console.log(err)
    res.render("celebrities/new")
  })
});

router.post('/celebrities/:id', (req, res, next) => {
  Celeb.update({_id:req.params.id},{$set:{name: req.body.name, occupation: req.body.occ, catchPhrase: req.body.catch}})
  .then(celeb => res.redirect("/celebrities"))
  .catch(err => {
    console.log(err)
    next();
  })
});

router.post('/celebrities/:id/delete', (req, res, next) => {
  Celeb.findByIdAndRemove(req.params.id)
  .then(celeb => res.redirect('/celebrities'))
  .catch(err => {
    console.log(err)
    next();
  })
});


module.exports = router;