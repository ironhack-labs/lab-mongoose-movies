const express = require('express');
const Celebrity = require('../models/celebrity.js');

const router = express.Router();

router.get('/', (req, res, next) => {
  Celebrity.find({})
    .then((celebrityArray) => {
      console.log(celebrityArray[0]);
      res.render('celebrities/list', { celebrityArray });
    })
    .catch((err) => {
      console.log('Je suis retrasé');
      next(err);
    });
});

router.get('/:id', (req, res, next) => {
  const celebrityId = req.params;
  Celebrity.findById(celebrityId)
    .then((celebrity) => {
      res.render('celebrities/detail', { celebrity });
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = router;
