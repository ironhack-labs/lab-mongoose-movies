const express = require('express');
const Celebrity = require('../models/celebrities');

const router = express.Router();

router.get('/', (req, res, next) => {
  Celebrity.find({}, (err, celebrities) => {
    if (err) { return next(err); }
    res.render('celebrities/index', {celebrities});
  });
});

router.get('/new', (req, res, next) => {
  res.render('celebrities/new', {celebrity: new Celebrity()});
});

router.get('/:id', (req, res, next) => {
  let celebrityId = req.params.id;
  Celebrity.findById(celebrityId, (err, celebrity) => {
    if (err) { return next(err); }
    console.log(celebrity);
    res.render('celebrities/show', celebrity);
  });
});

router.post('/', (req, res, next) => {
  let celebrityInto = {
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase
  };

  const newCelebrity = new Celebrity(celebrityInto);

  newCelebrity.save(err => {
    if (err) { return res.render('celebrities/new'); }
    return res.redirect('/celebrities');
  });
});

router.post('/:id/delete', (req, res, next) => {
  let celebrityId = req.params.id;

  Celebrity.findByIdAndRemove(celebrityId, (err, celebrity) => {
    if (err) { return next(err); }
    return res.redirect('/celebrities');
  });
});

module.exports = router;
