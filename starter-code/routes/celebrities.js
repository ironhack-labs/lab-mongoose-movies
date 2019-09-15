const express = require('express');
const router  = express.Router();
const Celebrity = require('../models/Celebrity')

/* GET home page */
router.get('/', (req, res, next) => {
  Celebrity.find()
    .then(celeb => res.render('celebrities/index', {celeb}))
    .catch(err => console.log('Celeb can not be found', err))
});

module.exports = router;