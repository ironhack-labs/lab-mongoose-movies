const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const Celebrities = require("../models/celebrity");

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get(`/celebrities`, (req, res, next) => {
  Celebrities
    .find()
    .then(celebs => res.render(`celebrities/index`,{celebs}))
    .catch(error => next(error));
});

module.exports = router;