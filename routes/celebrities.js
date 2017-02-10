/* jshint esversion: 6 */

const express = require('express');
const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity');

const router = express.Router();

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

module.exports = router;
