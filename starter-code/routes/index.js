const express = require('express');
const router  = express.Router();
const Celebrity = require('../models/Celebrity.js');


/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/celebrities', (req,res,next) => {
  Celebrity.find()
  .then(celebrities=>{
    res.render('celebrities',{celebrities})
  })
  .catch(err => {
    next()
  })
})


router.get('/celebrities/:id', (req,res,next) => {
  let id = req.params.id;
  Celebrity.findById(id)
  .then(celebrities =>{
    res.render('show',{celebrities})
  })
})
module.exports = router;
