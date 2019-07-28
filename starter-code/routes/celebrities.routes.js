const express = require('express');
const router = express.Router();

const Celebrity = require('../models/celebrity.model')


router.get('/', (req, res, next) => {
  Celebrity.find({})
    .then(allCelebs => res.render('celebritieslist', { celebrities: allCelebs }))
    .catch(err => console.log('Hubo un error:', err))
})

module.exports = router;