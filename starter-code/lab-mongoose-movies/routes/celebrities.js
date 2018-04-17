const express = require('express');
const Celebrity = require('../models/celebrity-model');
const router  = express.Router();

router.get('/celebrities', (req, res, next) => {
  Celebrity.find()
  .then((celebritiesFromDb) => {
    res.locals.celebrityList = celebritiesFromDb;
    res.render('celebrities/index');
  })
  .catch((err) => {
  next(err);    
  });
});



router.get('/celebrities/add', (req, res, next) => {
  res.render('/celebrities/new') // Tried to change the path, move up, move down the order....
});


router.post('process-celebrity', (req, res, next) => {
  const {name, occupation, catchPhrase} = req.body;
  Celebrity.create({name, occupation, catchPhrase})
  .then(() => {
    res.redirect('/celebrities')
  })
  .catch((err) => {
    next(err);
  });
  res.send(req.body);
});

router.get('/celebrities/:celebrityId', (req, res, next) => {
Celebrity.findById(req.params.celebrityId)
  .then((celebrityDetails) => {
    res.locals.celebrityId = req.params.celebrityId;
    res.locals.celebrity = celebrityDetails;
    res.render('celebrities/show');
  })
  .catch((err) => {
    next(err);
  });
});


router.get('/celebrities/:id/delete', (req, res, next) => {
Celebrity.findByIdAndRemove(req.params.celebrityId)
  .then(() => {
    res.render('celebrities/index');
  })
  .catch(() => {
    next(err);
  });
});


module.exports = router;
