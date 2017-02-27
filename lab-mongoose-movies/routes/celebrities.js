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

module.exports = router;
