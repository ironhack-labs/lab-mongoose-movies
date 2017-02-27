const Router = require('express').Router;
const Celebrity = require('../models/Celebrity.js');

const router = new Router();

router.get('/celebrities', (req, res, next) => {

  Celebrity.find({}, (err, celebDocs) => {
    if (err) {
      next(err);
      return;
    }

    res.render('celebrities/index', {
      celebs : celebDocs
    });
  });

});

router.get('/celebrities/new', (req, res, next) => {
  res.render('celebrities/new');
});

router.post('/celebrities/new', (req, res, next) => {

  const newCeleb = new Celebrity({
    name : req.body.name,
    occupation : req.body.occupation,
    catchPhrase : req.body.catchPhrase
  });

  newCeleb.save((err, celebDoc) => {
    if (err) {
      return next(err);
    }

    res.redirect('/celebrities');
  });

});

router.get('/celebrities/:id', (req, res, next) => {

  const celebId = req.params.id;

  Celebrity.findOne({ _id : celebId }, (err, celebDoc) => {
    if (err) {
      return next(err);
    }

    if (celebDoc) {
      res.render('celebrities/show', {
        celeb : celebDoc
      });
    }
    else {
      res.redirect('/celebrities');
    }

  });

});

router.post('/celebrities/:id/delete', (req, res, next) => {

  //Get the id of celebrity to delete
  const celebId = req.params.id;

  //Find the celebrity...
  Celebrity.findOne({ _id : celebId }, (err1, celebDoc) => {
    if (err1) {
      return next(err1);
    }

    //...and delete them from the database.
    if (celebDoc) {
      celebDoc.remove((err2) => {
        if (err2) {
          return next(err2);
        }

      });
    }

    res.redirect('/celebrities');
  });


});

router.get('/celebrities/:id/edit', (req, res, next) => {

  const celebId = req.params.id;

  //Find the celebrity...
  Celebrity.findOne({ _id : celebId }, (err1, celebDoc) => {
    if (err1) {
      return next(err1);
    }

    res.render('celebrities/edit', {
      celeb : celebDoc
    });
  });

});

router.post('/celebrities/:id/edit', (req, res, next) => {

  const celebId = req.params.id;
  const updatedValues = {
    name : req.body.name,
    occupation : req.body.occupation,
    catchPhrase : req.body.catchPhrase
  };

  Celebrity.findOneAndUpdate({ _id : celebId }, updatedValues, (err, celebDoc) => {
    if (err) {
      return next(err);
    }
    console.log('Hello World!');

    res.redirect('/celebrities/' + celebId);
  });

});

module.exports = router;
