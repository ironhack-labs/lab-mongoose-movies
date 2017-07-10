const express = require('express');
const CelebrityModel = require('../models/celebrity-model.js');
const router = express.Router();

router.get('/celebrities', (req, res, next) => {
  CelebrityModel.find((err, celebrityInfo) => {
    if (err) {
      next(err);
      return;
    }
    res.render('celebrity-views/celebrity-list.ejs',{
      celebrityInfo: celebrityInfo
    });
  });
});


router.get('/celebrities/new', (req, res, next) => {
  res.render('celebrity-views/celebrity-new.ejs');
});

router.post('/celebrities', (req, res, nexy) => {
  const newCelebrity = new CelebrityModel({
    name: req.body.celebrityName,
    occupation: req.body.celebrityOccupation,
    catchPhrase: req.body.celebrityCatchPhrase
  });

  newCelebrity.save((err) => {
    if (err) {
      next(err);
      return;
    }

    res.redirect('/celebrities');
  });
});

router.get('/celebrities/:celebId', (req, res, next) => {
  CelebrityModel.findById(
    req.params.celebId,
    (err, celebrityInfo) => {
      if (err) {
        next(err);
        return;
      }
      res.render('celebrity-views/show.ejs',{
        celebrityInfo: celebrityInfo
      });
    }
  );
});

router.get('/celebrities/:celebId/edit', (req, res, next) => {
  CelebrityModel.findById(
    req.params.celebId,
    (err, celebrityInfo) => {
      if (err) {
        next(err);
        return;
      }
      res.render('celebrity-views/celebrity-update.ejs',{
        celebrityInfo: celebrityInfo
      });
  });
});

router.post('/celebrities/:celebId/update', (req, res, next) => {
  CelebrityModel.findByIdAndUpdate(
    req.params.celebId,
    {
      name: req.body.celebrityName,
      occupation: req.body.celebrityOccupation,
      catchPhrase: req.body.celebrityCatchPhrase
    },
    (err, productInfo) => {
      if (err) {
        next(err);
        return;
      }
      res.redirect('/celebrities/' + productInfo._id);
    }
  );
});

router.post('/celebrities/:celebId/delete', (req, res, next) => {
  CelebrityModel.findByIdAndRemove(
    req.params.celebId,
    (err) => {
      if (err) {
        next(err);
        return;
      }
      res.redirect('/celebrities');
    });
});



module.exports = router;
