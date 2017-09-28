const express = require('express');
const Celebrity = require('../models/celebrity');
const router = express.Router(); // what is Router?


router.get('/', (req, res, next) => { // why just '/' for the URL?
  // console.log("debug" + req.params);
  Celebrity.find({},(err, celebrities) => {
    if (err) {
      return next(err);
    }
    res.render('celebrities/', {
      celebrities: celebrities
    });
  });
});

router.get('/:id/show', (req, res, next) => {  // don't understand why it's id/show and why without /show it doesn't work
  const celebrityID = req.params.id;
// console.log("debug");
  Celebrity.findById(celebrityID,(err, celebrity) => {
    if(err) {
      return next(err);
    }
    res.render('celebrities/show', {
      celebrity: celebrity
    });
  });
});

router.get('/new', (req, res, next) => {
  console.log("debug new celeb")
  res.render('celebrities/new');
  // object needed?
});

router.post('/', (req, res) => {
console.log("debug post")
  const newCeleb = new Celebrity({
    name: req.body.name,
    occupation: req.body.occupation,
    catchphrase: req.body.catchphrase
  });
  newCeleb.save((err) => {
    if(err) {
      res.render('celebrities/new');
    }
    res.redirect('/celebrities/');
  });
});

router.post('/:id/delete', (req, res, next) => {
  const celebrityID = req.params.id;
  Celebrity.findByIdAndRemove(celebrityID,(err, celebrity) => {
    if(err) {
      return next(err);
    }
    res.redirect('/celebrities/');
  });
});

router.get('/:id/edit', (req, res, next) => {
  const celebrityID = req.params.id;
  Celebrity.findById(celebrityID, (err, celebrity) => {
    if (err){
      return next(err);
    }
    res.render('celebrities/edit',{
      celebrity: celebrity
    });
  });
});

router.post('/:id',(req, res, next) => {
  const celebrityID = req.params.id;
  const updates = {
    name: req.body.name,
    occupation: req.body.occupation,
    catchphrase: req.body.catchphrase
  };
  Celebrity.findByIdAndUpdate(celebrityID, updates, (err, celebrity) => {
    if(err) {
      return next(err);
    }
    res.redirect('/celebrities/');
  });
});

module.exports = router;
