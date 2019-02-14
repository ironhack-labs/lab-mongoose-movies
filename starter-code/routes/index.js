const express = require('express');
const router  = express.Router();
const Celeberty = require('../models/celeberty');


/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/celebs', (req, res)=>{
  Celeberty.find({}).then(myCelebs => {
    // console.log(myCelebs);
      res.render('celeberties', {celebs:myCelebs})
  }).catch(err => {console.log(err)})

})

module.exports = router;
