const express = require('express');
const router  = express.Router();
// const Celebrity = require('../models/celebrity.js');

// router.get('/celebrities', (req, res, next) => {
//   Celebrity.find()
//     .then(celebrities => {
//       res.render('celebrities/index', {celebrities});
//     })
//     .catch(error => {
//       console.log(error)
//     })
// });

// router.get('/celebrity/:id', (req, res, next) => {
//   let celebrityId = req.params.id;
//   Celebrity.findOne({'_id': celebrityId})
//     .then(celebrity => {
//       res.render("celebrities/show", { celebrity })
//     })
//     .catch(error => {
//       console.log(error)
//     })
// });

module.exports = router;