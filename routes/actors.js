const express = require('express');
const router = express.Router();
const Actor = require('../models/Actor');

router.get('/', (req, res, next) => {
  Actor.find()
    .then(actorsFromDb => {
      res.render('actors', {
        "actors": actorsFromDb
      });
    })
});

module.exports = router;