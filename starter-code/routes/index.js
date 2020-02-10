const express = require('express');
const router  = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});
// router.get('/celebrities',req, res, next => {
//   res.render('elebrities')
// });

// router.get('/celebrities', (req, res, next) => {
//   Celebrity.find()
//     .then(allTheCelebritiesFromDB => {
//       // console.log('Retrieved Celebrities from DB:', allTheBooksFromDB);
//       res.render('celebritied', {
//         celebritieds: allTheCelebritiesFromDB
//       });
//     })
//     .catch(error => {
//       console.log('Error while getting the celebrities from the DB: ', error);
//     })
// });

module.exports = router;
