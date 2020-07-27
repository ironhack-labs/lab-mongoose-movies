const express = require('express');
const router  = express.Router();

/* GET home page */
// router.get('/', (req, res, next) => {
//   res.render('index');
// });


router.get('/', (req, res, next) => {
  Calebrity.find()
    .then(allTheCelebritiesFromDB => {
      console.log('Retrieved celebrities from DB:', allTheCelebritiesFromDB);
      res.send('celebrities');
    })
    .catch(error => {
      console.log('Error while getting the celebrities from the DB: ', error);
    })
});


module.exports = router;