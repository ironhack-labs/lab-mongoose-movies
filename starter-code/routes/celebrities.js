const express = require('express');
const router  = express.Router();
const Celebrity = require('../models/Celebrity');


router.get('/', (req, res, next) => {
  console.log(req.session)
  Celebrity.find()
  .then((allTheCebs)=>{
    res.render('celebrities', {allTheCebs});
      })
  .catch((err)=>{
    next(err);
  })



});



router.get('/details/:id', (req, res, next)=>{
  let id = req.params.id;

  Celebrity.findById(id)
  .then((oneCelebrity)=>{
    res.render('celebrities/singleCeleb', {oneCelebrity})
  })
  .catch((err)=>{
    next(err);
  })
})

module.exports = router;
