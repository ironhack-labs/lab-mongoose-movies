const express = require('express');
const router = express.Router();
const Celebrity = require('../models/Celebrity');


router.get('/', (req, res, next) => {
  Celebrity.find().exec((err, celebrities)=>{
    res.render('celebrities/index',{
      celebrities : celebrities,
    })
    if(err){return next(err);}
  })
});


router.get('/new', (req, res, next) => {
  res.render('celebrities/new');
});

router.post('/', (req, res, next) => {
  const {name, proppellers, maxSpeed} = req.body;
  const drone = new Drone({name, proppellers, maxSpeed});
  drone.save( err =>{
    if(err){return next(err)}
    res.redirect('/');
  })
});

module.exports = router;