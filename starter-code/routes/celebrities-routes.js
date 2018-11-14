const express = require('express');
const router  = express.Router();
const Celebrity    = require('../models/Celebrity');

router.get('/', (req, res, next) => {
  Celebrity.find()
  .then((allTheCelebs)=>{
      res.render('celebrities/celebrities', {celebs: allTheCelebs})
  })
  .catch((err)=>{
      next(err);
  })
});

router.get('/:theID', (req, res, next)=>{
  Celebrity.findById(req.params.theID)
  .then((theCelebrity)=>{
      res.render('celebrities/details', theCelebrity)
  })
  .catch((err)=>{
      next(err);
  })
})



module.exports = router;