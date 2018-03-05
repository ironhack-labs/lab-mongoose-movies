const express = require('express');
const router = express.Router();
const Celebrity = require('../models/celebrity');

router.get('/', (req, res, next) => {
  Celebrity.find({}, (err, celebrities) => {
    if (err) throw next(err);
    res.render('celebrities/index', { celebrities });
  });
});

router.get('/:id', (req, res, next) => {
  const celebrityId = req.params.id;
  Celebrity.findById(celebrityId, (err, celebrity) => {
    if (err) throw next(err);
    res.render('celebrities/show', { celebrity });
  });
});
module.exports = router;
