const express = require('express');
const router = express.Router();
const Celebrities = require('../models/celebrity');



router.get('/', (req, res) => {
  Celebrities.find({}, (err, celebrities) => {
    if (err) {
      return next(err);
    }

    res.render('celebrities/index', {
      celebritiesArray: celebrities
    })
  });
});


router.get('/:id', (req, res, next) => {
  let id = req.params.id
  celebrities.findById (id, (err, celebrities) => {
    res.render('celebrities/show', {
      celebrities: celebrities
    })
  })
});

module.exports = router;
