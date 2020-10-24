const express = require('express');
const router  = express.Router();
const Celebrity = require('../models/celebrity.js'); //importamos celebrity de la colección


/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});





// router.get('/celebrities', (req, res, next) => {
//     Celebrity.find()
//       .then(allTheCelebritiesFromDB => {
//         console.log('Retrieved celebrities from DB:', allTheCelebritiesFromDB);
//         res.render('celebrities/index', { celebrities: allTheCelebritiesFromDB });
//       })
//       .catch(error => {
//         next()
//         console.log('Error while getting the celebrities from the DB: ', error);
//       })
//   });

module.exports = router;



