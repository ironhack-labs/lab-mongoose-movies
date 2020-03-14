const express = require('express');
const router  = express.Router();
const mongoose = require('mongoose');
const Celebrity = require('../model/celebrity');

/* GET home page */
router.get('/celebrities', (req, res, next) => {
    Celebrity.find()
    .then(celebrities => {
      res.render('../views/celebrities/celebrities.hbs',{celebrities});
    })
    .catch(err =>{throw err;})
});

router.get('/celebrities/new',(req,res,next)=> {
  res.render('../views/celebrities/new-celebrity.hbs');
})

router.post('/celebrities/create',(req,res,next) => {
  const {name,occupation,catchPhrase} = req.body;
  const newCelebrity = new Celebrity({name,occupation,catchPhrase});
  newCelebrity.save()
    .then(celebrity => {
      console.log('a new celebrity is added to our database')
      res.redirect('/celebrities');
    })
    .catch(err=> {
      res.redirect('/celebrities/new');
      throw err;
    })
})

module.exports = router;