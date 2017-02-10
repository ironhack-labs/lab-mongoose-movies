/* jshint esversion: 6 */

const express = require('express');
const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity');

const router = express.Router();

router.get('/new', (req, res, next) => {
  res.render('celebrities/new');
});

router.get('/:id', (req, res, next) => {
  celebrityId = req.params.id;
  Celebrity.findById(celebrityId, (err, celebrity) =>{
    if (err) return next(err);
    res.render('celebrities/show', {celeb: celebrity});
  });
});

router.get('/', (req, res, next) => {
  Celebrity.find({}, (err, docs) => {
    if (err) return next(err);
    res.render('celebrities/index', {celebs: docs});
  });
});

router.post('/', (req, res, next) => {
  const body = req.body;
  const celebToCreate = {
    name : body.name,
    occupation : body.occupation,
    catchPhrase : body.catchPhrase
  };

  const newCeleb = new Celebrity(celebToCreate);
  newCeleb.save((err) =>{
    if (err) res.render('celebrities/new');
    res.redirect('/');
  });
});

module.exports = router;
