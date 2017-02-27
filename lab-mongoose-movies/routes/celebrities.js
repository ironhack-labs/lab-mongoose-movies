let express = require('express'); //import express object

const router = express.Router(); //create router object with express router method

const CelebrityModel = require('../models/celebrities.js');

router.get('/celebrities', (req, res, next) => {
  console.log('In the route');
  CelebrityModel.find((err, celebrities) => {
    console.log('In the db cb');
    if (err) {
      next(err);
      return;
    }

    res.render('celebrities/index', {
      celebrities: celebrities
    });
  });

});

module.exports = router;
