const express = require('express');
const router  = express.Router();
const Celebrity = require('../models/Celebrity');

/* GET */
router.get('/', (req, res, next) => {
  Celebrity.find()
    .then(celebrities => res.render('celebrities', { celebrities }))
    .catch(err => console.log(err))
})

module.exports = router;