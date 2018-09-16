const express = require('express');
const router  = express.Router();
const Celebrity = require("../models/celebrity.js");

router.get('/celebrities', (req, res, next) => {
  Celebrity.find()
  .then(celebrities => {
    res.render('celebrities/index',{celebrities});
  })
  .catch(err => {
    next(err)
  })
});

router.get('/celebrities/new', (req, res, next) => {
  res.render('celebrities/new');
});

router.get('/celebrities/:id/edit', (req, res, next) => {
  let celebId = req.params.id;
  Celebrity.findById(celebId)
  .then(celebrities => {
    res.render('celebrities/edit',{celebrities});
  }).catch(err => {
    next(err)
  })
  
});

router.get('/celebrities/:id', (req, res, next) => {
  let celebId = req.params.id ;
  Celebrity.findById(celebId)
  .then(celebrities => {
    res.render('celebrities/show',{celebrities});
    
  })
  .catch(err => {
    next(err)
  })
});


router.post('/celebrities/new', (req, res, next) => {
  const{name,occupation,catchPhrase} = req.body ;
  new Celebrity ({name,occupation,catchPhrase})
  .save().then(Celeb =>{
    console.log("Celebrity created");
    res.redirect("/celebrities")

  }).catch(err => {
    next(err)
  })
  
});
router.post('/celebrities/:id', (req, res, next) => {
  let celebId = req.params.id;
  const{name,occupation,catchPhrase} = req.body
  Celebrity.findByIdAndUpdate(celebId, {name,occupation,catchPhrase})
  .then(celebrities => {
    res.redirect("/celebrities");
    
  })
  .catch(err => {
    next(err)
  })
});

router.post('/celebrities/:id/delete', (req, res, next) => {
  let celebId = req.params.id 
  Celebrity.findByIdAndRemove(celebId)
  .then(celebrities => {
    res.redirect("/celebrities");
    
  })
  .catch(err => {
    next(err)
  })
});


module.exports = router;