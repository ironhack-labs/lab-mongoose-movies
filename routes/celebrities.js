const express = require('express');

const Celebrity = require('../models/celebrity.js');

const router = express.Router();

router.get('/celebrities', (req, res, next) => {
  Celebrity.find((err, celebrities) => {
    if (err) {
      next(err);
      return;
    }

    res.render('celebrities/index', {
      celebrities: celebrities
    });
  });
});



router.get('/celebrities/new', (req, res) => {
  res.render('celebrities/new');
});

router.get('/celebrities/:id', (req, res, next) => {

  const celebrityId = req.params.id;

  Celebrity.findById(celebrityId, (err, celebrityInfo) => {
    if (err) {
      next(err);
      return;
    }

    res.render('celebrities/info', {
      celebrity: celebrityInfo
    });
  });
});


router.post('/newCelebrity', (req, res, next) => {
  const celebrityInput = {
    name: req.body.name,
    ocupation: req.body.ocupation,
    imageUrl: req.body.imageUrl,
    catchPhrase: req.body.catchPhrase
  };

  const newCelebrity = new Celebrity(celebrityInput);

  newCelebrity.save((err) => {
    if (err) {
      next(err);
      return;
    }

    res.redirect('/celebrities');
  });
});

//TO EDDIT
router.get('/celebrities/:id/edit', (req, res, next) =>  {
  const celebrityId = req.params.id;

  Celebrity.findById(celebrityId, (err, celebrity) => {
    if (err) {
      next(err);
      return;
    }

    res.render('celebrities/edit', {
      celebrity: celebrity
    });
  });
});


router.post('/celebrities/:id', (req, res, next) => {
  const celebityId =  req.params.id;
  const celebrityUpdate = {
    name: req.body.name,
    ocupation: req.body.ocupation,
    imageUrl: req.body.imageUrl,
    catchPhrase: req.body.catchPhrase
  };
  // db.celebity.updateOne({ _id: product}, { $set: productUpdates})
  Celebrity.findByIdAndUpdate(celebityId, celebrityUpdate, (err, celebity) => {
    if (err) {
      next(err);
      return;
    }

    res.redirect('/celebrities');
  });

});



//TO DELETE
router.post('/celebrities/:id/delete', (req, res, next) => {
  const celebrityId = req.params.id;

  Celebrity.findByIdAndRemove(celebrityId, (err, product) => {
    if (err) {
      next(err);
      return;
    }

    res.redirect('/celebrities');
  });
});

module.exports = router;
