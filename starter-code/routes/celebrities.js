const express = require('express');
const Celebrity = require('../models/celebrity');

const router  = express.Router();

router.get('/', (req, res, next) => {
  Celebrity.find({}, (err, celebrities) => {
    if (err) { return next(err); }

    res.render('celebrities/index', {
      celebrities: celebrities
    });
  });
});

router.get('/new', (req, res, next) => {
  res.render('celebrities/new', {});
});

router.post('/:id/delete', (req, res, next) => {
  const id = req.params.id;

 Celebrity.findByIdAndRemove(id, (err, product) => {
   if (err){ return next(err); }
   return res.redirect('/celebrities');
 });
});

router.get('/:id', (req, res, next) => {
  Celebrity.findById(req.params.id, (err, celebrity) => {
    if (err) { return next(err); }

    res.render('celebrities/show', {
      celebrity: celebrity
    });
  });
});

router.post('/', (req, res, next) => {
  const celebrityInfo = {
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase
  };

  const newCelebrity = new Celebrity(celebrityInfo);

  newCelebrity.save((err) => {
    if (err) {
      return res.redirect('/new');
     }

    return res.redirect('/celebrities');
  });
});

module.exports = router;
