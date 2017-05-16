const express = require('express');

const Celebrity = require('../models/celebrity.js');

const router = express.Router();


router.get('/celebrities', (req, res, next) => {
  Celebrity.find((err, celebritys) => {
    if (err) {
      next(err);
      return;
    }

      // display views/celebrities/index.ejs
    res.render('celebrities/index', {
      celebritys: celebritys
    });
  });
});

router.get('/celebrities/:id', (req, res, next) => {
  const celebrityId = req.params.id;
Celebrity.findById(celebrityId, (err, celebDoc) => {
  if (err) {
    next(err);
    return;
  }
});
});

router.get('/celebrities/new', (req, res, next) => {
    // display views/products/new.ejs
  res.render('celebrities/new');
});

router.post('/celebrities', (req, res, next) => {
  const celebrityinfo = {
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase,
      };

  const theCelebrity = new Celebrity(celebrityInfo);

  theCelebrity.save((err) => {
    if (err) {
      next(err);
      return;
    }
    res.redirect('/celebrities');
  });
});

router.post('/celebrities', (req, res, next) => {
  const celebrityInfo = {
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase
   };

  const theCelebrity = new Celebrity(productInfo);

  theCelebrity.save((err) => {
    if (err) {
      next(err);
      return;
    }

      // redirect to http://localhost:3000/products
      //                                  ---------
      //                                       |
      //              --------------------------
      //              |
    res.redirect('/celebrities');
  });
});
module.exports = router;
