const express = require('express');
const Celebrity = require('../models/celebrity-model');
const router  = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/celebrities', (req, res, next) => {
  Celebrity.find()
    .then((celebritiesFromDb) => {
      res.render('celebrities/index', {celebritiesList: celebritiesFromDb});
    })
    .catch((err) => {
      next(err);
    });
});

router.get('/celebrities/new', (req, res, next) => {
  res.render('celebrities/new');
});

router.post('/add-celebrity', (req, res, next) => {
  const {name, occupation, catchPhrase} = req.body;
  Celebrity.create({name, occupation, catchPhrase})
    .then(() => {
      res.redirect('/celebrities');
    })
    .catch((err) => {
      // next(err);
      res.render('celebrities/new');
    });
});

router.post('/celebrities/delete/:celebId', (req, res, next) => {
  Celebrity.findByIdAndRemove(req.params.celebId)
    .then(() => {
      res.redirect('/celebrities');
      console.log("Deletion successful!");
    })
    .catch((err) => {
      next(err);
    });
});

router.get('/celebrities/:celebId', (req, res, next) => {
  Celebrity.findById(req.params.celebId)
    .then((celebrityDetails) => {
      res.render('celebrities/show', {celebrityDetails});
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = router;
