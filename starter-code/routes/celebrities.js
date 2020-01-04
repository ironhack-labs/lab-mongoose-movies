const express = require('express');
const router  = express.Router();

const Celebrity = require('../models/celebrity');

router.get('/', (req, res, next) => {
  Celebrity.find()
  .then(allCelebrities => {
    // res.send(allCelebrities);
    res.render('../views/celebrities/index.hbs', { allCelebrities });
  })
  .catch(err => {
    console.log(err);
    next();
  });
});

router.get('/:id', (req, res, next) => {
  Celebrity.findById(req.params.id)
  .then(celebrity => {
    res.render('../views/celebrities/show.hbs', { celebrity });
  })
  .catch(err => {
    console.log(err);
    next();
  });
});

module.exports = router;