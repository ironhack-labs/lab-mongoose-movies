const router = require('express').Router()
const Celebrity = require('../models/Celebrity')


router.get('/', (req, res, next) => {
    res.render('index');
  });



module.exports = router
