/*jshint esversion: 6*/

const express = require('express');
const router = express.Router();
const Celebrity = require('../models/celebrity');

/*GET ALL CELEBS*/
router.get('/', (req, res, next) => {
  Celebrity.find({}, (err, celebs) => {
    if(err){return next(err);}
    res.render('celebrities/index', {
      celebs: celebs
    });
  });
});

/*GET ADD NEW CELEB*/
router.get('/new', (req, res) => {
  res.render('celebrities/new');
});

/*GET DETAILS OF EACH CELEB*/
router.get('/:id', (req, res, next) => {
  Celebrity.findById(req.params.id, (err, celeb) =>{
    if(err){return next(err);}
    res.render('celebrities/show', celeb);
  });
});



/*POST ADD NEW CELEB*/
router.post('/', (req, res, next) => {
  const newCelebInfo = {
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase
  };
  const newCeleb = new Celebrity(newCelebInfo);
  newCeleb.save((err) => {
    if(err) {res.redirect('/new');}
    return res.redirect('/celebrities');
  });
});

/*POST DELETE A CELEB*/
router.post('/:id/delete', (req, res, next) => {
  const celebId = req.params.id;
  Celebrity.findByIdAndRemove(celebId, (err, celeb) => {
    if(err) {return next(err);}
    res.redirect('/celebrities');
  });
});

/*GET UPDATE A CELEB*/
router.get('/:id/edit', (req, res, next) => {
  const celebId = req.params.id;
  Celebrity.findById(celebId, (err, celeb) => {
    if(err) {return next(err);}
    res.render('celebrities/edit', celeb);
  });
});

/*POST UPDATE A CELEB*/
router.post('/:id', (req, res, next) => {
  const celebId = req.params.id;
  const celebInfo = {
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase
  };
  Celebrity.findByIdAndUpdate(celebId, celebInfo, (err, celeb) => {
    if(err) {return next(err);}
    res.redirect('/celebrities');
  });
});

module.exports = router;
