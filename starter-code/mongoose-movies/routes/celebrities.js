const express = require('express');
const router  = express.Router();
const Celebrity = require('../models/celebrity.js');


router.get('/celebrities', (req, res, next) => {
  Celebrity.find()
    .then(celebrities => {
      res.render("prueba", {celebrities});
    })
    .catch(error => {
      console.log(error)
    })
});

// router.get('/celebrities', (req, res, next) => {
//   res.render('prueba');
// });

// router.get('/prueba', (req, res, next) => {

//       res.render("prueba", {cat: "celebrities", status: "rich"});

// });

module.exports = router;