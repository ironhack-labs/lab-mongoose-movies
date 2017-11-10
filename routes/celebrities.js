const express = require('express');
const Celebrity = require('../models/celebrity');

const router  = express.Router();

router.get('/celebrities', (req, res, next) => {
  Celebrity.find({}, (err, celebrities) => {
   if (err) { return next(err) }
   res.render('celebrities/index', {
     celebrities: celebrities
   });
 });
});

router.get('/celebrities/new', (req, res, next) => {
  res.render('celebrities/new');
});

router.get('/celebrities/:id', (req, res, next) => {
  let id = req.params.id

  Celebrity.findById(id, (err, celeb) => {
    res.render('celebrities/show', {
      celeb: celeb
    })
  })
});

router.post('/celebrities', (req, res, next) => {

  let celebInfo = {
    name: req.body._name,
    occupation: req.body._occupation,
    catchPhrase: req.body._catchPhrase
  };

  const newCeleb = new Celebrity(celebInfo);

  newCeleb.save( (err) => {
    if (err) {
      console.log(err);
      return res.redirect('/celebrities/new');
    } else {
      console.log('celeb added');
      return res.redirect('/celebrities');
    }
  });

});

router.post('/celebrities/:id/delete', (req, res, next) => {
  let id = req.params.id

  Celebrity.findByIdAndRemove(id, (err, product) => {
    if (err){ return next(err); }

    return res.redirect('/celebrities');
  });
});

router.get('/celebrities/:id/edit', (req, res, next) => {
  let id = req.params.id

  Celebrity.findById(id, (err, celeb) => {
    res.render('celebrities/edit', {
      celeb: celeb
    })
  })
});

router.post('/celebrities/:id', (req, res, next) => {
  let id = req.params.id

  const updates = {
    name: req.body._name,
    occupation: req.body._occupation,
    catchPhrase: req.body._catchPhrase
  };

  Celebrity.findByIdAndUpdate(id, updates, (err, celeb) => {
    if (err){ return next(err); }

    return res.redirect('/celebrities');
  });
});

module.exports = router;
