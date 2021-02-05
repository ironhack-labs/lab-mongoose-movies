const express = require ('express');
const router = express.Router();
const Celebrity = require ('../models/celebrity');

router.get('/celebrities', (req, res, next) => {
    Celebrity.find({}, (err, celebs) => {
      if (err) { return next(err); }
      res.render('celebrities/index', { celebrities: celebs })
       });
  });

module.exports = router;