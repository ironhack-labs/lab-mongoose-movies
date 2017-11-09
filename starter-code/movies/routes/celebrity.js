const express = require('express');
const Celebrity = require('../model/celebrity');
const router = express.Router();

router.get('/celebrity', (req, res, next) => {
  Celebrity.find({}, (error, celebrityList) =>{
    if(error) return next(error);

    res.render('celebrity/index', {
      celebrityList : celebrityList,
    })
  });
});

router.get('/celebrity', (req, res, next) => {
  res.render('/celebrity');
});

  module.exports = router;
