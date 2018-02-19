const express = require('express');
const Celebrity = require('../models/celebrity')

const router = express.Router();

router.get('/', (req, res) => {
  Celebrity.find({}, (err, celebrities) => {
    if (err) {return next(err)}

    res.render('celebrities/index', { celebrities: celebrities });
  });
});

router.get('/:id', (req, res, next) => {
  const celebrityId = req.params.id;

  Celebrity.findById(celebrityId, (err, celebrities) => {
    if (err) { return next(err); }
    res.render('celebrities/show', { celebrities: celebrities });
  });
});

router.get('/', (req, res) => {
  res.render('celebrities/new');
});

router.post('/celebrities')

module.exports = router;
