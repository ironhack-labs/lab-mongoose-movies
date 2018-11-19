const express = require('express');
const router  = express.Router();
const Celebrity = require("../models/Celebrity");

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

// router.get('/celebrities', (req, res, next) => {
//   console.log("eeoo")
//   Celebrity.find({})
//   .then(data => {
//     console.log(data);
//     res.render('celebrities/index', {data})
//   })
//   .catch(err => {
//     next();
//     return console.error('Error connecting to mongo', err)
//   })
// });

module.exports = router;
