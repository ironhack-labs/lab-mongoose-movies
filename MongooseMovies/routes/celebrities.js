const Router = require('express').Router;
const Celebrity = require('../models/Celebrity.js');

const router = new Router();

router.get('/celebrities', (req, res, next) => {

  const celebs = Celebrity.find({}, (err, celebs) => {
    if (err) {
      next(err);
      return;
    }

    res.render('celebrities/index', {
      celebs : celebs
    });
  });

});


module.exports = router;
