const express      = require ('express');
const Celebrity    = require ('../models/celebrity.js');

const celebRoutes  = express.Router();


celebRoutes.get('/celebrities', (req, res, next) => {
  Celebrity.find((err, celebrityList) => {
    if (err) {
      next(err);
      return;
    }

    res.render('celebrities/index.ejs', {
      celebrities: celebrityList
    });
  });
});

celebRoutes.get('/celebrities/new', (req, res, next) => {
  res.render('celebrities/new.ejs');
});

celebRoutes.post('/celebrities/new', (req, res, next) =>{
  const theCelebrity = new Celebrity({
    name: req.body.celebName,
    occupation: req.body.celebOccupation,
    catchPhrase: req.body.catchPhrase
  });
  theCelebrity.save((err) => {
    if (err) {
      res.render('celebrities/new.ejs', {
        errors: theCelebrity.errors
      });
      return;
    }
    res.redirect('/celebrities');
  });
});

celebRoutes.get('/celebrities/:id', (req, res, next) =>{
  const celebId = req.params.id;

  Celebrity.findById(celebId, (err, theCelebrity) => {
    if (err) {
      next(err);
      return;
    }
  //  If celeb wasn't found
    if(!theCelebrity) {
      next();
      return;
    }
    res.render('celebrities/show.ejs', {
      celebrity: theCelebrity
    });
  });
});

celebRoutes.post('/celebrities/:id/delete', (req, res, next) => {
  const celebId = req.params.id;

  Celebrity.findByIdAndRemove (celebId, (err, theCelebrity) => {
    if(err) {
      next(err);
      return;
    }

    res.redirect('/celebrities');
  });
});

celebRoutes.get('/celebrities/:id/edit', (req, res, next) => {
  const celebId = req.params.id;

  Celebrity.findById(celebId, (err, theCelebrity) => {
    if (err) {
      next(err);
      return;
    }

    res.render('celebrities/edit.ejs', {
      celebrity: theCelebrity
    });
  });
});

celebRoutes.post('/celebrities/:id', (req, res, next) => {
  const celebId = req.params.id;

  const celebChanges = {
    name: req.body.celebName,
    occupation: req.body.celebOccupation,
    catchPhrase: req.body.catchPhrase
  };

  Celebrity.findByIdAndUpdate(
    celebId,
    celebChanges,
    (err, theCelebrity) => {
      if (err) {
        res.render('celebrities/edit.ejs', {
          celebrity: theCelebrity,

        });
        next(err);
        return;
      }

      res.redirect('/celebrities');
    }

  );
});





module.exports = celebRoutes;
