let express = require('express'); //import express object

const router = express.Router(); //create router object with express router method

const CelebrityModel = require('../models/celebrities.js');

router.get('/celebrities', (req, res, next) => {

  CelebrityModel.find((err, celebrities) => {

    if (err) {
      next(err);
      return;
    }

    res.render('celebrities/index', {
      celebrities: celebrities
    });
  });

});

router.get('/celebrities/new', (req, res, next) => {
  res.render('celebrities/new');
});

router.post('/celebrities', (req, res, next) => {
  console.log('In the post');
  const celebrityInfo = {
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase
  };

  const newCelebrity = new CelebrityModel(celebrityInfo);

  newCelebrity.save((err) => {
    console.log('in the save cb');
    if (err) {
      res.render('/celebrities/new');
    }

    res.redirect('/celebrities');
  });
});

router.get('/celebrities/:id', (req, res, next) => {
  const celebrityId = req.params.id;

  console.log(celebrityId);
  CelebrityModel.findById(celebrityId, (err, celebDoc) => {
    console.log('inside the db cb');
    if (err) {
      next(err);
      return;
    }
    console.log('no error');
    res.render('celebrities/show', {
      celebrity: celebDoc
    });
  });
});

router.post('/celebrities/:id/delete', (req, res, next) => {
  const celebrityId = req.params.id;

  CelebrityModel.findByIdAndRemove(celebrityId, (err) => {
    if(err) {
      next(err);
      return;
    }
    res.redirect('/celebrities');
  });
});


module.exports = router;
