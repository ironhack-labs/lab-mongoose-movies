const express = require('express');
const router  = express.Router();
const Celebrity = require("../models/Celebrity")

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/celebrities', (req, res, next) => {
  Celebrity.find({})
  .then(celeb=>{
    console.log(celeb)
    res.render('celebrities',{celeb: celeb});
  })
  .catch(err=>{

  })
});

module.exports = router;
