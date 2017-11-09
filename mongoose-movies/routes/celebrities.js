const express = require('express');
const Celebrity = require('../models/celebrities');

const router = express.Router();

router.get('/', (req, res, next) => {
  Celebrity.find({}, (err, celebrities) => {
    if (err) { return next(err); }
    res.render('celebrities/index', {celebrities});
  });
});

router.get('/:id', (req, res, next) => {
  let celebrityId = req.params.id;
  Celebrity.findById(celebrityId, (err, celebrity) => {
    if (err) { return next(err); }
    console.log(celebrity);
    res.render('celebrities/show', celebrity);
  });
});

module.exports = router;
