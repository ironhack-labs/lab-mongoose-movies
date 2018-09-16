const express = require('express');
const router = express.Router();
const Celebrity = require('../models/Celebrity')


// Celebrity List
router.get('/', (req, res, next) => {
  Celebrity.find()
    .then(celebrities => {
      res.render('celebrities/', { celebrities })
    }).catch(e => next(e))
})
module.exports = router;
