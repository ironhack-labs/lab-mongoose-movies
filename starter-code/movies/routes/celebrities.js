const express = require('express');
// require the Celebrity model here
const Celebrity = require('../models/Celebrity.js');
const router = express.Router();


router.get('/celebrities', (req, res, next) => {
  // Iteration #2
  Celebrity.find({}, (err, e) => {
    if (err) {
      return next(err);
    } else {
      console.log(e);
      res.render('celebrities/index', {
        title: 'Celebrities',
        celebrities: e
      });
    }
  });
});

router.get('/celebrities/:id', function(req, res, next) {
  let id = req.params.id;
  Product.findById(id, (err, e) => {
    if (err) {
      return next(err);
    }
    res.render('show', {
      title: 'Celebrity Detail',
      celebrity: e
    });
    res.redirect(`/celebrities/${e._id}`);
  });
});
router.post('/celebrities', (req, res, next) => {
  // Iteration #3
  console.log("celebritiesWorks");
  let {
    celebrityName,
    occupation,
    catchPhras,
  } = req.body;
  let updates = {
    celebrityName,
    occupation,
    catchPhras,
  };
  let e = new Celebrity({
    celebrityName: req.body.celebrityName,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase,
  });
  e.save((err, e) => {
    if (err) {
      console.log(err);
    }
    res.redirect(`/celebrities`);
  });
});

module.exports = router;
