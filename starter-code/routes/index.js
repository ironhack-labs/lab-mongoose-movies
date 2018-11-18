const express = require('express');
const router  = express.Router();
const Celebrity = require("../models/Celebrity")

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/celebrities', (req, res, next) => {
  Celebrity.find({})
  .then(celebs=>{
    console.log(celebs)
    res.render('celebrities',{celebs: celebs});
  })
  .catch(err=>{

  })
});

router.get('/celebrities/:id', (req, res, next) => {
  Celebrity.findById(req.params.id)
  .then(celeb=>{
    console.log(celeb)
    res.render('celebrity',{celeb: celeb});
  })
  .catch(err=>{

  })
});

module.exports = router;
