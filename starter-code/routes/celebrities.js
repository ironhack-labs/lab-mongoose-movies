const express = require('express');
const router  = express.Router();
const Celebrity = require('../models/Celebrity')

/* GET home page */
router.get('/', (req, res, next) => {
  Celebrity.find()
    .then(celeb => res.render('celebrities/index', {celeb}))
    .catch(err => console.log('Celeb can not be found', err))
});

router.get('/:id', (req, res, next) => {
  const celebId = req.params.id;
  Celebrity.findById(celebId)
    .then(celeb => res.render('celebrities/show', {celeb}))
    .catch(err => console.log('Invalid ID', err))
});

module.exports = router;