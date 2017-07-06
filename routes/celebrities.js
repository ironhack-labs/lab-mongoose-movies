var express = require('express');
var Celebrity = require('../models/celebrity');
var router = express.Router();

router.get('/celebrities', function(req, res, next) {
  Celebrity.find({}, (err, c) => {
    if (err){
      console.log(err);
    }else {
    res.render('celebrities/index');
  }
});
});
