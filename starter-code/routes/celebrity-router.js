const express = require('express');

const CelebrityModel = require('../models/celebrity-model.js');

const router = express.Router();


router.get('/celebrities', (req, res, next) => {

  CelebrityModel.find((err, allCelebrities) => {
    if (err) {
      next(err);
      return;
    }

    res.locals.listOfCelebs = allCelebrities;

    res.render('celebrities/index.ejs');
  });
});

router.get('/celebrities/new', (req, res, next) => {
  res.render('celebrities/new.ejs');
});

router.post('/celebrities', (req, res, next) => {

    const celeb = new CelebrityModel({
        name: req.body.celebName,
        occupation: req.body.occupation,
        catchPhrase: req.body.catchPhrase,
    });

    celeb.save((err) => {
      if(err) {

        next(err);
        return;

      }

      res.redirect('/celebrities');

    });
});

router.get('/celebrities/:celebId', (req, res, next) => {
  CelebrityModel.findById (
    req.params.celebId,

    (err, celebFromDb) => {
      if(err) {
        next(err);
        return;
      }
      res.locals.celebInfo = celebFromDb;

      res.render('celebrities/celebrity-details.ejs');
    }
  );
});

module.exports = router;
