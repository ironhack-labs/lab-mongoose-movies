const express = require('express');
const router = express.Router();
const Celebrity = require('../models/celebrity');


/* GET celebrities page */
router.get('/celebrities', (req, res, next) => {
  Celebrity.find({})
  .then(celebrities => res.render('celebrities/index', {celebrities}))
  .catch(err => next())
});

/* GET celebrities id page */
router.get('/celebrities/:id', (req, res) => {
  Celebrity.findById({_id: req.params.id})
  .then(celebrities => res.render('celebrities/show',{celebrities}))
  .catch(err => next())
});

module.exports = router;