const Router = require('express').Router;
const Celebrity = require('../models/Celebrity.js');

const router = new Router();

router.get('/celebrities', (req, res, next) => {

  const celebs = Celebrity.find({}, (err, celebs) => {
    if (err) {
      next(err);
      return;
    }

    res.render('celebrities/index', {
      celebs : celebs
    });
  });

});

router.get('/celebrities/:id', (req, res, next) => {

  console.log('here');

  const celebId = req.params.id;

  const celebs = Celebrity.findOne({ _id : celebId }, (err, celeb) => {
    if (err) {
      return next(err);
    }

    if (celeb) {
      res.render('celebrities/show', {
        celeb : celeb
      });
    }
    else {
      res.redirect('/celebrities');
    }

  });

});


module.exports = router;
