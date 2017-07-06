const express = require('express');
const Celebrity = require('../models/Celebrity');
const router = express.Router();

router.get('/', (req, res, next) => {
  Celebrity.find((err, celebrities) => {
    if(err){
      next();
      return err;
    } else {
      res.render('celebrities/index', {celebrities: celebrities});
    }
  });
});

module.exports = router;
