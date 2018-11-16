const express = require('express');
const router  = express.Router();
const Celebrity = require('../models/Celebrity');
const Movie = require('../models/Movie');
const app_name = require('../package.json').name;
const debug = require('debug')(`${app_name}:indexRouter`);


/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});


router.get('/celebrities', (req, res, next) => {
  debug(process.env.DEBUG);
  Celebrity.find().then(celebs => {
    res.render('celebrities/index', {celebs});
  })
});

router.get('/celebrities/:celebId/show', (req, res, next) => {
  debug(process.env.DEBUG);
  Celebrity.findById(req.params.celebId).then(celeb => {
    res.render('celebrities/show',{celeb})
  })
});



module.exports = router;
