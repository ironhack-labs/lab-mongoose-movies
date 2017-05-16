const express = require('express');

const Celebrity = require('../models/celebrity.js');
// const Celebrity = require('../models/celebrity.js');
const router = express.Router();


router.get('/celebrities', (req, res, next) => {
  Celebrity.find((err, celebrities) => {
    if (err) {
      next(err);
      return;
    }
    console.log(celebrities);
      // display views/celebrities/index.ejs
    res.render('celebrities/index', {
      celebrities: celebrities
    });
  });
});

router.get('/celebrities/new', (req, res, next) => {
    // display views/celebrities/new.ejs
  res.render('celebrities/new');
});

router.post('/celebrities', (req, res, next) => {
  const celebrityInfo = {
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase
  };

  const theCelebrity = new Celebrity(celebrityInfo);

  theCelebrity.save((err) => {
    if (err) {
      res.render('celebrities/new');
      // next(err);
      // return;
    }
    res.redirect('/celebrities');
  });
});

router.get('/celebrities/:id/edit', (req, res, next) => {
  const celebrityId = req.params.id;

  Celebrity.findById(celebrityId, (err, celebrityDoc) => {
    if (err) {
       next(err);
       return;
     }
    res.render('celebrities/edit', {
      celebrity: celebrityDoc
    });
  });
});

router.post('/celebrities/:id', (req, res, next) => {
  const celebrityId = req.params.id;
  const celebrityUpdates = {
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase,
};
  // db.products.updateOne({ _id: product }, { $set: productUpdates })
  Celebrity.findByIdAndUpdate(celebrityId, celebrityUpdates, (err, product) => {
    if (err){
      next(err);
      return;
    }
      res.redirect('/celebrities');
    });
  });

router.post('/celebrities/:id/delete', (req, res, next) => {
  const celebrityId = req.params.id;


  Celebrity.findByIdAndRemove(celebrityId, (err, celebrity) => {
    if (err) {
      next(err);
      return;
    }
    res.redirect('/celebrities');
  });
});

router.get('/celebrities/:id', (req, res, next) => {
  let celebrityId = req.params.id;

  Celebrity.findById(celebrityId, (err, celebrityDoc) => {
    if (err) {
      next(err);
      return;
    }
    res.render('celebrities/show', {
      celebrity: celebrityDoc
    });
  });
});

module.exports = router;
