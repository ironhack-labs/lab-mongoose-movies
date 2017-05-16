
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

//UPDATE

celebrityRoutes.get('/celebrities/:id/edit', (req, res, next) => {
    //                         |
  const celebrityId = req.params.id;

  celebrityModel.findById(celebrityId, (err, thatCelebrity) => {
    if (err) {
      next(err);
      return;
    }

    res.render('celebrities/edit', {
      celebrity: thatCelebrity
    });
  });
});

celebrityRoutes.post('/celebrities/:id', (req, res, next) => {
    //                          |
  const celebrityId = req.params.id;

    // gather the form values into an object
  const celebrityChanges = {
    name: req.body.celebrityName,
    ocupation: req.body.celebrityOcupation,
    catchPhrase: req.body.celebritycatchPhrase,
    profileImage: req.body.celebrityImageUrl
  };

  celebrityModel.findByIdAndUpdate(
      // 1st arg -> which document (id of the document)
    celebrityId,
      // 2nd arg -> which changes to save (from the form)
    celebrityChanges,
      // 3rd arg -> CALLBACK!
    (err, thatCelebrity) => {
      if (err) {
        res.render('celebrities/edit', {
          celebrity: thatCelebrity,
          validationErrors: thatCelebrity.errors
        });
        return;
      }

      // this is how you would redirect to product details page
      // res.redirect(`/products/${celebrityId}`);

      res.redirect('/celebrities');
    }
  );
});




// DESTROY

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
