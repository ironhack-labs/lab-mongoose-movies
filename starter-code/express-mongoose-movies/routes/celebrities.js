const express = require('express');
const Celebrities = require('../models/celebrity');
const router = express.Router();

router.get('/', (req, res, next) => {
  Celebrities.find({}, (err, celebrities) => {
    if (err) return next(err);
    res.render('celebrities/index', {
      celebrities: celebrities,
      title: 'Celebrities'
    });
  });
});

router.get('/:id', (req, res, next) => {
  let celebrityId = req.params.id;
  Celebrities.findById(celebrityId, (err, celebrity) => {
    if (err) return next(err);
    console.log('celebrity', celebrity);
    res.render('celebrities/show', {
      celebrity : celebrity
    });
  });
});


module.exports = router;
