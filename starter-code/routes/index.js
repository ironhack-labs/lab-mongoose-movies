const express = require('express');

const Celebrity = require('../models/Celebrity.js');

const router = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/celebrities', (req, res, next) => {
  Celebrity.find()
    .then((results) => {
      res.render('celebrities', { celeb: results, msg: req.query.msg });
    })
    .catch((err) => {
      throw new Error(err);
    });
});

router.post('/celebrities', (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body;
  const newCeleb = new Celebrity({ name, occupation, catchPhrase });
  newCeleb.save()
    .then(() => {
      res.redirect('/celebrities');
    })
    .catch((err) => {
      throw new Error(err);
    });
});

router.get('/celebrity', (req, res, next) => {
  const celebId = req.query.celeb_id;
  Celebrity.findOne({ _id: celebId })
    .then((result) => {
      res.render('celebrity', { celeb: result });
    })
    .catch((err) => {
      throw new Error(err);
    });
});

router.get('/celebrity/add', (req, res, next) => {
  res.render('celebrity-add');
});

router.get('/celebrity/:celebId/delete', (req, res, next) => {
  Celebrity.findByIdAndDelete(req.params.celebId)
    .then(() => {
      res.redirect('/celebrities/?msg=Celebrity+Removed');
    })
    .catch((err) => {
      throw new Error(err);
    });
});

router.get('/celebrity/:celebId/edit', (req, res, next) => {
  Celebrity.findOne({ _id: req.params.celebId })
    .then((result) => {
      res.render('celebrity-edit', { celeb: result });
    })
    .catch((err) => {
      throw new Error(err);
    });
});

router.post('/celebrity/:celebId/edit', (req, res, next) => {
  console.log(req.body);
  Celebrity.findByIdAndUpdate(req.params.celebId, { $set: req.body })
    .then(() => {
      res.redirect('/celebrities/?msg=Celebrity+Updated');
    })
    .catch((err) => {
      throw new Error(err);
    });
});

module.exports = router;
