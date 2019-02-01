const express = require('express');
const router  = express.Router();
const Celebrity = require('../models/Celebrity');

/* GET home page */
router.get('/', (req, res, next) => {
  Celebrity.find()
    .then((celeb) => {
      res.render('celebrities/index', { celeb });
    })
    .catch((error) => {
      console.log(error);
    });
});

router.get('/show/:id', (req, res, next) => {
  Celebrity.findOne({ _id: req.params.id })
    .then((celeb) => {
      console.log(celeb);
      res.render('celebrities/show', { celeb });
    })
    .catch((error) => {
      console.log(error);
    });
});

module.exports = router;
