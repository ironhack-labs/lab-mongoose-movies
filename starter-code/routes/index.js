const express = require('express');
const router  = express.Router();
const Celebrity = require('../models/Celebrity')

router.get('/', (req, res) => {
  Celebrity.find()
    .then((celebs) => {
      res.render('index', { celebs });
    })
    .catch((error) => {
      console.log(error);
    })
});

router.get('/celebs/:celebID', (req, res) => {
  const celeb = req.params.celebID;
  Celebrity.findById(celeb)
    .then((celeb) => {
      res.render('show', celeb);
    })
    .catch((err) => console.log(err));
})

router.get('/celebs', (req, res) => {
  res.render('newCeleb');
});

router.post('/newList', (req, res) => {
  const { name, occupation, catchPhrase } = req.body;
  const newCeleb = new Celebrity({ name, occupation, catchPhrase });
  newCeleb.save()
    .then((celeb) => {
      res.redirect('newList')
    })
    .catch((err) => {
      console.log(err)
    })
});

router.get('/newList', (req, res) => {
  Celebrity.find()
    .then((celebs) => {
      res.render('newList', { celebs });
    })
    .catch((error) => {
      console.log(error);
    })
});

router.post('celebs/:celebID/delete', (req, res) => {
  Celebrity.findByIdAndDelete(req.params.celebId)
    .then((celebs) => {
      res.redirect('/');
    })
    .catch((err) => {
      console.log(err)
    })
});

router.get('celebs/:celebId/edit', (req, res, next) => {
  Celebrity.findById(req.params.celebId)
  .then((celeb) => res.render('edit', celeb))
  .catch(err => next(err));
});

router.post('celebs/:celebId/edit', (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body;
  Celebrity.findById(req.params.celebId)
  .then((celeb) => res.render('edit', celeb))
  .catch(err => next(err));
});


module.exports = router;
