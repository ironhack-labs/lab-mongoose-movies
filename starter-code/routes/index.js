const express = require('express');
const router  = express.Router();

const Celebrity = require('../models/Celebrity');


/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

module.exports = router;


/* GET Celebrities list  */


router.get('/celebrities', (req,res,next) => {
   Celebrity.find()
    .then(celebrities => {
       res.render('celebrities/index', {celebrities});
    })
    .catch(next)

})