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
    return res.redirect('/celebrities');
});

// /celebrities está definido en app.js por eso capturamos solo la iD
router.get('/:id', (req, res, next) => {
  const id = req.params.id;
  console.log("id"+id);
  Celebrities.findById(id, function (err, celebrities) {
  if (err) return next(err);
  res.render('celebrities/show', { celebrities: celebrities });
    }
  );
});


module.exports = router;
