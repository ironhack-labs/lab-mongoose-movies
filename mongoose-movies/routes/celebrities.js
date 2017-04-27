/*jshint esversion: 6*/
const express = require('express');
const router = express.Router();
const Celebrity = require('../models/celebrity');

router.get('/', (req, res, next) => {
    Celebrity.find({}, (err, celebrities) => {
    if (err) {
      next(err);
    } else {
      res.render('celebrities/index', { celebrities: celebrities });
    }
  });
});


router.get('/new', (req, res, next) => {
  res.render('celebrities/new');
});

router.post('/', (req, res, next) => {
  const newCelebrity = new Celebrity(req.body);
  newCelebrity.save((err)=>{
    if(err){
      res.render('celebrities/new');
    }
    res.redirect('/celebrities');
  });
});

router.get('/:id', (req, res, next) => {
  let celebiryId = req.params.id;
  Celebrity.findById(celebiryId, (err, celebrity) => {
    if (err) {
      next(err);
    } else {
      res.render('celebrities/show', { celebrity: celebrity });
    }
  });
});

router.get('/:id/delete', (req, res, next) => {
  const id = req.params.id;
  Celebrity.deleteOne({_id:id},(err)=>{
    if(err){
      next(error);
    }
    res.redirect('/celebrities');
  });
});

router.get('/:id/edit', (req, res, next) => {
  let celebiryId = req.params.id;
  Celebrity.findById(celebiryId, (err, celebrity) => {
    if (err) {
      next(err);
    } else {
      res.render('celebrities/edit', { celebrity: celebrity });
    }
  });
});

router.post('/:id', (req, res, next) => {
  console.log("hi");
  const editCelebrity = {
    name: req.body.name,
    occupation: req.body.ocuppation,
    catchPhrase: req.body.catchPhrase
  };

  let celebiryId = req.params.id;
  Celebrity.findByIdAndUpdate(celebiryId, editCelebrity, (err)=>{
    if(err){
      next(err);
    }
    res.redirect('/celebrities');
  });
});

module.exports = router;
