/*jshint esversion:6*/
var express = require('express');
var router = express.Router();

const Celebrities = require('../models/celebrity');

router.get('/', (req, res, next) => {
  Celebrities.find({}, (err, celebrities) => {
    if (err) { return next(err); }
    res.render('celebrities/index', {
      celebrities: celebrities
    });
  });
});

router.post('/', (req, res, next) => {
  const celebrityInfo = {
      name: req.body.name,
      occupation: req.body.occupation,
      catchPhrase: req.body.catchPhrase
  };

  const newCelebrity = new Celebrities(celebrityInfo);

  newCelebrity.save( (err) => {
    if (err) { return next(err); }
    return res.redirect('/celebrities');
  });
});

// router.get('/celebrities', (req, res, next) => {
//   console.log("entra");
//   Celebrities.find({},function (err,celebrities){
//     if(err) return next(err);
//     res.render('celebrities/index',{celebrities});
//   });
// });
module.exports = router;
