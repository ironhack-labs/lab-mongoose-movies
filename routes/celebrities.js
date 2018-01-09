const express = require('express');
const router = express.Router();

const Celebrity = require('../models/celebrity.js');

router.get('/', (req, res, next) => {
  Celebrity.find({}, (err, celebrities) => {
    if (err) {
      console.error(err);
    };
    res.render('celebrities/index', {
      celebrities,
    });
  });
});

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

module.exports = router;