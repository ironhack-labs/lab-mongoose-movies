const express = require('express');

const Celebrity = require('../models/celebrity');

const router  = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
  console.log("Hello");
  res.render('index');
});

router.get('/celebrities', (req, res, next) => {
  // res.render('celebrities');
  Celebrity.find()
    .then((celebritiesFromDb) => {
      res.locals.celebritiesList = celebritiesFromDb;
      res.render('celebrities');
    })
    .catch((err) => {
      res.send(err);
        next(err);
    });
});

router.get('/celebrity/add', (req, res, next) => {
  res.render('add-celebrity');
});

router.post('/process-celebrity', (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body;

  Celebrity.create({ name, occupation, catchPhrase })
    .then(() => {
      res.redirect('/celebrities');
    })
    .catch((err) => {
      next(err);
    });
});

router.get('/celebrity/:celebrityId', (req, res, next) => {
  Celebrity.findById(req.params.celebrityId)
    .then((celebrityDetails) => {
      res.locals.celebrity = celebrityDetails;
      res.render('show');
    })
      .catch((err) => {
        next(err);
      });
});

router.get('/celebrity/:celebrityId/delete', (req, res, next) => {
  Celebrity.findByIdAndRemove(req.params.celebrityId)
    .then(() => {
      res.redirect('/celebrities');
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = router;

