const express = require('express');

const CelebrityModel = require('../models/celebrity.js');

const router = express.Router();

router.get('/celebrities', (req, res, next) => {
  CelebrityModel.find((err, allCelebrities) => {
    if (err){
      next(err);
      return;
    }
    res.locals.listOfCelebrities = allCelebrities;

    res.render('celebrities/index.ejs');

    });
});



router.get('/celebrities/new', (req, res, next) => {
  res.render('celebrities/celebrity-form.ejs');
});

router.post('/celebrities', (req, res, next) => {

  const theCelebrity = new CelebrityModel({
    name: req.body.celebrityName,
    occupation: req.body.celebrityOccupation,
    catchPhrase: req.body.celebrityCatchPhrase
  });

  theCelebrity.save((err) => {
    if(err && theCelebrity.errors){
      res.locals.errorMessages = theCelebrity.errors;

      res.render('celebrities/celebrity-form.ejs');

      return;
    }

    if (err && theCelebrity.errors) {
      next(err);
      return;
    };

    res.redirect('/celebrities');

  });
});

router.get('/celebrities/:celebId', (req, res, next) => {
  CelebrityModel.findById(
    req.params.celebId,

    (err, celebritiesFromDb) => {
      if(err) {
        next(err);
        return;
      }

      res.locals.celebritiesInfo = celebritiesFromDb;
      res.render('celebrities/celebrity-details.ejs');
    }

  );
});

router.get('/celebrities/:celebId/edit', (req, res, next) => {
  CelebrityModel.findById(
    req.params.celebId,

    (err, celebritiesFromDb) => {
      if(err) {
        next(err);
        return;
      }
      res.locals.celebritiesInfo = celebritiesFromDb;
      res.render('celebrities/celebrity-edit.ejs');
    }

  );

});

router.post('/celebrities/:celebId', (req, res, next) => {
  CelebrityModel.findById(
    req.params.celebId,

    (err, celebritiesFromDb) => {
      if(err) {
        next(err);
        return;
      }

      celebritiesFromDb.name = req.body.celebrityName;
      celebritiesFromDb.occupation = req.body.celebrityOccupation;
      celebritiesFromDb.catchPhrase = req.body.celebrityCatchPhrase;

      celebritiesFromDb.save((err) => {
        if(err) {
          next(err);
          return;
        }

        res.redirect('/celebrities');
      });

   }
 );
});

router.post('/celebrities/:celebId/delete', (req, res, next) => {
  CelebrityModel.findByIdAndRemove(
    req.params.celebId,

    (err, celebritiesFromDb) => {
      if(err) {
        next(err);
        return;
      }
      res.redirect('/celebrities');
    }
 );
});






module.exports = router;
