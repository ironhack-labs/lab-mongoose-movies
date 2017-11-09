const express = require('express');
const Celebrity = require('../models/celebrity');

const router = express.Router();

//ITERATION 2 -- with promise
router.get('/celebrities', (req, res, next) => {
  Celebrity.find({})
    .then((celebs) => {
      res.render('celebrities', {
        celebs : celebs
      });
    }).catch((err) =>{
      return next(err);
    });
});

//ITERATION 3 -- with promise
router.get('/celebrities/:id', (req, res, next) => {
  let id = req.params.id;
  Celebrity.findById(id)
    .then((celeb) => {
      res.render('show', {
        celeb : celeb
      });
    }).catch((err) => {
      return next(err);
    });
});

//ITERATION 4 -- with promise
router.get('/new', (req, res, next) => {
  res.render('new');
});

router.post('/', (req, res, next) => {

  const celebData = {
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.phrase
  }

  const newCeleb = new Celebrity(celebData);

  newCeleb.save()
    .then(() => {
      res.redirect('/celebrities');
    }).catch((err) => {
      res.render('new');
    });

});

//ITERATION 5 -- with promise
router.post('/celebrities/:id/delete', (req, res, next) => {
  let id = req.params.id;

  Celebrity.findByIdAndRemove(id)
    .then(() => {
      res.redirect('/celebrities');
    }).catch((err) => {
      return next(err);
    });
});

//ITERATION 6 -- with promise
router.get('/celebrities/:id/edit', (req, res, next) => {
  let id = req.params.id;
  Celebrity.findById(id)
    .then((celeb) => {
      res.render('edit', {
        celeb : celeb
      });
    }).catch((err) => {
      return next(err);
    });
});

router.post('/:id', (req, res, next) => {
    let id = req.params.id;

    const updateCeleb = {
      name: req.body.name,
      occupation: req.body.occupation,
      catchPhrase: req.body.phrase
    }

    Celebrity.findByIdAndUpdate(id, updateCeleb)
      .then((celeb) => {
        res.redirect('/celebrities');
      }).catch((err) => {
        return next(err);
      });
});

module.exports = router;
