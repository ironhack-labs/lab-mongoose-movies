const express = require('express');
const Celebrity = require('../models/celebrity');
const router = express.Router();

/* GET celebrity page */

router.get('/all-celebrities-page', (req, res, next) => {
  Celebrity.find()
    .then(celebritiesFromDb => {
      // res.send(celebritiesFromDb);
      res.render('all-celebrities-page', {celebritiesList: celebritiesFromDb});
    })
    .catch(err => {
      next(err);
    });
});

// Add celebrity forms

router.get('/celebrity/add', (req, res, next) => {
  res.render('new-celebrity');
});

// Add celebrity save

router.post('/process-celebrity', (req, res, next) => {
  const {name, occupation, catchPhrase} = req.body;
  Celebrity.create({name, occupation, catchPhrase})
    .then(() => {
      res.redirect('/all-celebrities-page');
    })
    .catch(err => {
      next(err);
    });
});

// Edit celebrity form

router.get('/celebrities/:celebrityId/edit', (req, res, next) => {
  Celebrity.findById(req.params.celebrityId)
    .then(celebrityDetails => {
      res.locals.celebrityId = req.params.celebrityId;
      res.locals.celebrity = celebrityDetails;
      res.render('celebrity-edit');
    })
    .catch(err => {
      next(err);
    });
});

// Edit celebrity save

router.post('/process-edit/:celebrityId', (req, res, next) => {
  const {name, occupation, catchPhrase} = req.body;
  const id = req.params.celebrityId;
  Celebrity.findByIdAndUpdate(
    id,
    {name, occupation, catchPhrase},
    {runValidators: true}
  )
    .then(() => {
      res.redirect('/all-celebrities-page');
    })
    .catch(err => {
      next(err);
    });
});

//  Show celebrity details

router.get('/celebrities/:celebrityId', (req, res, next) => {
  const id = req.params.celebrityId;
  Celebrity.findById(id)
    .then(celebritiesDetails => {
      res.render('celebrity-details', {celebrity: celebritiesDetails});
    })
    .catch(err => {
      next(err);
    });
});

// Delete celebrity

router.get('/celebrities/:celebrityId/delete', (req, res, next) => {
  Celebrity.findByIdAndRemove(req.params.celebrityId)
    .then(() => {
      res.redirect('/all-celebrities-page');
    })
    .catch(err => next(err));
});

module.exports = router;
