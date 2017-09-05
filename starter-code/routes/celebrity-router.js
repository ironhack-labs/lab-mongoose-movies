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

router.post('/celebrities/:celebId/delete', (req, res, next) => {
  CelebrityModel.findByIdAndRemove(
    req.params.celebId,

    (err, celebInfo) => {
      if(err) {
        next(err);
        return;
      }
      res.redirect('/celebrities');
    }
  );
});

router.get('/celebrities/:celebId/edit', (req, res, next) => {
  CelebrityModel.findById(
    req.params.celebId,

    (err, celebFromDb) => {
      if (err) {
        next(err);
        return;
      }

      res.locals.celebInfo = celebFromDb;

      res.render('celebrities/edit-celebrity.ejs');
    }
  );
});

router.post('/celebrities/:celebId', (req, res, next) => {
  CelebrityModel.findById(
    req.params.celebId,
    (err, celebFromDb) => {
      if(err) {
        next(err);
        return;
      }
      celebFromDb.name = req.body.celebName;
      celebFromDb.occupation = req.body.occupation;
      celebFromDb.catchPhrase = req.body.catchPhrase;

      celebFromDb.save((err) => {
        if(err) {
          next(err);
          return;
        }
        res.redirect('/celebrities');
      });
    }
  );
});

module.exports = router;
