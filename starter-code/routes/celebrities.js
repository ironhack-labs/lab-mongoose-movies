const express = require('express');
const router = express.Router();
const Celebrity = require("../models/Celebrity");

router.get('/', (req, res, next) => {
  Celebrity.find()
    .then((celeb) => {
      res.render('celebrities/index', {
        celeb
      })
    })
});

router.get('/new', (req, res, next) => {
  res.render('celebrities/new');
});

router.post("/new", (req, res) => {
  Celebrity.create({
      name: req.body.name,
      occupation: req.body.occupation,
      catchPhrase: req.body.catchPhrase
    })
    .then(res.redirect('/celebrities'))
    .catch(res.redirect('/celebrities/new', {
      error: `There was an error trying to create ${req.body.name}`
    }));
});

router.post('/:id/delete', (req, res, next) => {
  Celebrity.findByIdAndDelete(req.params.id)
    .then(res.redirect('/celebrities'))
    .catch(res.redirect('/celebrities', {
      error: `There was an error trying to delete the star`
    }));
});


router.get('/:id', (req, res, next) => {
  Celebrity.findById(req.params.id)
    .then(celeb => {
      res.render('celebrities/show', celeb)
    })
    .catch(res.redirect('/celebrities', {
      error: `There was an error trying to access the star profile`
    }));
});















module.exports = router;