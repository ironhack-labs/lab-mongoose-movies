const express = require('express');
const router = express.Router();

const Celebrity = require('../models/celebrity.js');

router.get('/celebrities/', (req, res, next) => {
  Celebrity.find({}, (err, celebrities) => {
    if (err) {
      console.error(err);
    };
    res.render('celebrities/index', {
      celebrities,
    });
  });
});

router.get('/celebrities/new', (req, res, next) => {
  res.render('celebrities/new')
})

router.get('/celebrities/:id', (req, res, next) => {
  let id = req.params.id
  Celebrity.findById(id, (err, celeb) => {
    if (err) {
      next(err);
    }
    res.render('celebrities/show', {
      celeb,
    });
  });
});

router.post('/celebrities/', (req, res, next) => {
  const celebInfo = {
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase
  }
  const newCelebrity = new Celebrity(celebInfo);
  newCelebrity.save((err) => {
    if (err) {
      console.error(err);
      return res.redirect('/celebrities/new');
    }
    return res.redirect('/celebrities');
  })
})

router.post('/celebrities/:id/delete', (req, res, next) => {
  let id = req.params.id
  Celebrity.findByIdAndRemove(id, (err, celeb) => {
    if (err) {
      next(err);
    }
    return res.redirect('/celebrities');
  });
});

module.exports = router;