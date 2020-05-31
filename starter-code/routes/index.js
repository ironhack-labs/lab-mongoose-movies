const express = require('express');
const router  = express.Router();
const Celebrity = require('../models/celebrity.js');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

// router.get('/celebrities', (req, res, next) => {
//   Celebrity.find()
//   .then(allCelebrities => {
//     res.render('celebrities/index', { celebrities: allCelebrities });

//   })
//   .catch(error => {
//     console.log('No encuentra famosos', error);
//   })

// });


module.exports = router;
