const express = require('express');
const router = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});


// NOTE
// res.render('celebrities/edit', { listOfCelebrities : listOfCelebrities})  <= for arrays
// res.render('celebrities/edit', oneCelebrityObject) <= for objects

module.exports = router;
