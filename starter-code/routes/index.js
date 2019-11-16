const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const Celebrities = require("../models/celebrity");

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get(`/celebrities/:id`, (req, res, next) => {
  Celebrities
    .findById(req.params.id)
    .then(celeb => res.render(`celebrities/show`,celeb))
    .catch(error => next(error));
});

router.get(`/celebrities`, (req, res, next) => {
  Celebrities
    .find()
    .then(celebs => res.render(`celebrities/index`,{celebs}))
    .catch(error => next(error));
});



module.exports = router;