
const express = require('express');

const celebrityModel = require('../models/celebrity.js');

const celebrityRoutes = express.Router();

celebrityRoutes.get('/celebrities', (req, res, next) => {
  celebrityModel.find((err, celebrityList) => {
    if (err) {
      next(err);
      return;
    }
    res.render('celebrities/index.ejs', {
      celebrityRoutes: celebrityList
    });
  });
});



celebrityRoutes.get('/celebrities/new', (req, res, next) => {
  res.render('celebrities/new');
});

celebrityRoutes.post('/celebrities/new', (req, res, next) => {
const thatCelebrity = new celebrityModel ({
    name: req.body.celebrityName,
    ocupation: req.body.celebrityOcupation,
    catchPhrase: req.body.celebritycatchPhrase,
    profileImage: req.body.celebrityImageUrl
  });

  thatCelebrity.save((err) => {
    if (err) {
      res.render('celebrities/new', {
        validationErrors: thatCelebrity.errors
      });
      return;
    }
    res.redirect('/celebrities');
  });
});

celebrityRoutes.get('/celebrities/:id/', (req, res, next) => {
  const myCelebrityId = req.params.id;

celebrityModel.findById( myCelebrityId, (err, thatCelebrity) => {
  if (err) {
    next(err);
    return;
  }
    res.render('celebrities/show', {
    celebrity: thatCelebrity
    });
  });
});

celebrityRoutes.post('/celebrities/:id/delete', (req,res, next) => {
  const celebrityId= req.params.id;

  celebrityModel.findByIdAndRemove(celebrityId, (err, thatCelebrity) => {
    if (err) {
      next(err);
      return;
    }
    res.redirect('/celebrities');
  }
  );
});

module.exports = celebrityRoutes;
