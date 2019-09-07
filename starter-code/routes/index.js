const express = require('express');
const router = express.Router();
const Celebrity = require('../models/Celebrity')

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/celebrities/index', (req, res, next) => {
  Celebrity.find()
    .then(celebrity => {
      res.render('celebrities/index', { celebrity })
    })
    .catch(error => {
      console.log('Error while getting the fucking celebrities from the DB: ', error);
    })
});

router.get('/celebrities/new', (req, res, next) => {
  res.render('celebrities/new');
});


router.get('/celebrities/:id', (req, res, next) => {
  Celebrity.findById({ _id: req.params.id })
    .then(celebrity => {
      res.render('celebrities/show', { celebrity })
    })
    .catch(error => {
      console.log('Error while getting the fucking celebrity from the DB: ', error);
    })
});


router.post('/celebrities', (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body
  const celebrity = new Celebrity({ name, occupation, catchPhrase })
  celebrity.save()
    .then()
    .catch(error => {
      console.log('Error occured:', error)
      res.redirect('/celebrities/new')
    })

  res.redirect('/celebrities/index')
  //res.render('index')
});

router.post('/celebrities/:id/delete', (req, res, next) => {
  //const { name, occupation, catchPhrase } = req.body
  console.log(req.params.id)
  Celebrity.findByIdAndRemove({ _id: req.params.id })
    .then()
    .catch(error => {
      console.log('Error occured:', error)
      res.redirect('/celebrities/index')
    })

  res.redirect('/celebrities/index')
  //res.render('index')
});


module.exports = router;
