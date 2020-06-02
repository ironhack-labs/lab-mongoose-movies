const express = require('express');
const router  = express.Router();

const Celebrity = require("../models/celebrity.js");


router.get('/', (req, res, next) => {
  Celebrity.find()
    .then(allCelebrities => {
        console.log(allCelebrities);
      res.render('celebrities/index', { celebrities: allCelebrities });
    })
    .catch(error => {
      console.log('Error while getting the celebrities from the DB: ', error);
    });
});

module.exports = router;
