const express = require('express');
const router = express.Router();

const Celebrity = require('./../models/Celebrity');

//Get celebrities by ID
///celebrities/{{this._id}}"
router.get('/:celebrityId', (req,res,next) => {
  const {celebrityId} = req.params;
  console.log(celebrityId);
  Celebrity.findById(celebrityId)
    .then( (oneCelebrity) => {
      console.log(oneCelebrity);
      res.render('celebrities/show',{oneCelebrity})
    })
    .catch( (err) => console.error(err))
})
//GET all celebrities
router.get('/', (req,res,next) => {
  Celebrity.find()
    .then( (allCelebritiesFromDb) => res.render('celebrities',{allCelebritiesFromDb}))
    .catch( (err) => console.error(err));
})

module.exports = router;