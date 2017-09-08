/*jshint esversion: 6 */

const express = require('express');
const Celebrity = require('../models/celebrity');

const router  = express.Router();

router.get('/', (req, res, next) => {
  Celebrity.find({}, (err, celebrities) => {
     if (err) { return next(err); }
     else res.render('celebrities/index', {
       celebrities: celebrities
     });
   });
});

router.get('/:id', (req, res, next) =>{
  const celebId = req.params.id;
  Celebrity.findById(celebId, (err, celebrities) => {
    if (err) {return next(err);}
    else res.render('celebrities/show', {
      celebrities : celebrities
    });
  });
});

router.get('/new', (req, res, next) => {
  res.render('celebrities/new');
});


router.post('/', (req, res, next) => {
  const celebInfo = {
      name: req.body.name,
      occupation: req.body.occupation,
      catchPhrase: req.body.catchPhrase
  };

  const newCeleb = new Celebrity(celebInfo);
  newCeleb.save( (err) => {
    if (err) { next(err); }
    else {
        res.redirect('/celebrities');
      }
  });
});


router.post('/:id/delete', (req, res, next) => {
  const celebId = req.params.id;

  Celebrity.findByIdAndRemove(celebId, (err, celebrities) => {
    if (err){ return next(err); }
    return res.redirect('/celebrities');
  });
});

module.exports = router;
