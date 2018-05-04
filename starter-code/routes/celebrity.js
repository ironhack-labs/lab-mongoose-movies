const Celebrity = require('../models/celebrity-model');

const express = require('express');
const celebrityRouter = express.Router();

celebrityRouter.get('/celebrities', (req, res, next) => {
  Celebrity.find()
    .then(celebrities => {
      res.render('celebrity/celeb-index', { list: celebrities });
    })
    .catch(error => {
      console.log(error);
    });
});

celebrityRouter.get('/celebrities/:celebAdd', (req, res, next) => {
  Celebrity.findById(req.params.celebAdd)
    .then(celebrity => {
      res.render('celebrity/details', { list: celebrity });
      // next();
    })
    .catch(error => {
      console.log(error);
      next();
    });
});

celebrityRouter.get('/celebrities/new', (req, res, next) => {
  res.render('celebrity/new-celebrity');
});

celebrityRouter.post('/celebrities/create', (req, res, next) => {
  const theActualName = req.body.theName;
  const theActualOccupation = req.body.theOccupation;
  const theActualCatchPhrase = req.body.theCatchPhrase;
  Celebrity.create({
    name: theActualName,
    occupation: theActualOccupation,
    catchPhrase: theActualCatchPhrase,
  });
  res.redirect('/celebrities');
});

celebrityRouter.post('/celebrities/delete/:celebDelete', (req, res, next) => {
  Celebrity.findByIdAndRemove(req.params.celebDelete)
    .then(Celebrity => {})
    .catch(error => {
      console.log(error);
    });
  res.redirect('/celebrities');
});

celebrityRouter.get('/celebrities/edit/:celebEdit', (req, res, next) => {
  Celebrity.findById(req.params.celebEdit).then(theCelebrity => {
    res.render('celebrity/edit', { celebrity: theCelebrity });
  });
});

celebrityRouter.post('/celebrities/update/:celebUpdate', (req, res, next) => {
  Celebrity.findByIdAndUpdate(req.params.celebUpdate, {
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase,
  })
    .then(celebrity => {})
    .catch(error => {
      console.log(error);
    });
  res.redirect('/celebrities');
});

module.exports = celebrityRouter;
