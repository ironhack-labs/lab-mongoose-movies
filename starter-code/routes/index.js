const express = require('express');
const router = express.Router();
const Celebrities = require('../models/Celebrity');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/celebrities', (req, res, next) => {
  Celebrities.find({})
    .then(celebrities => {
      console.log(celebrities);
      res.render('celebrities/index', { celebrityList: celebrities });
    })
    .catch(err => {
      next(err);
    });
});

router.get('/celebrities/new', (req, res, next) => {
  res.render('celebrities/newCeleb.hbs');
});

router.get('/celebrities/:celebrityId/edit', (req, res, next) => {
  Celebrities.findById(req.params.celebrityId).then(celebrity => {
    res.render('celebrities/edit.hbs', celebrity);
  });
});

router.post('/celebrities/:celebrityId/delete', (req, res, next) => {
  Celebrities.findByIdAndRemove(req.params.celebrityId)
    .then(() => {
      res.redirect('/celebrities');
    })
    .catch(err => {
      next(err);
    });
});

router.get('/celebrities/:celebrityId', (req, res, next) => {
  Celebrities.findById(req.params.celebrityId)
    .then(celebrity => {
      console.log(celebrity);
      res.render('celebrities/celebrityInfo', celebrity);
    })
    .catch(err => {
      next(err);
    });
});

router.post('/celebrities', (req, res, next) => {
  const { name, occupation, catchphrase } = req.body;
  Celebrities.create({
    name,
    occupation,
    catchphrase,
  })
    .then(createdCeleb => {
      res.redirect(`/celebrities/${createdCeleb._id}`);
    })
    .catch(err => {
      next(err);
    });
});

router.post('/celebrities/:celebrityId', (req, res, next) => {
  const { name, occupation, catchphrase } = req.body;
  Celebrities.updateOne(
    { _id: req.params.celebrityId },
    {
      name,
      occupation,
      catchphrase,
    }
  ).then(() => {
    res.redirect(`/celebrities/${req.params.celebrityId}`);
  });
});

module.exports = router;
