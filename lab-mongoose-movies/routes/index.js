const express = require('express');
const router = express.Router();
const Celebrity = require('../models/celebrity-model.js');


/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/celebrities', (req, res, next) => {
  Celebrity.find()
   .then((celebrityResults)=>{
    res.locals.celebrityArray = celebrityResults;
    res.render("celebrities/index")
    //res.send(celebrityResults)
   })
   .catch(err =>{
     next(err)
   })
})

router.get('/celebrities/new', (req, res, next)=>{
  res.render("celebrities/new.hbs");
})



router.post('/process-celebrities', (req, res, next)=>{
  const {name, occupation, catchPhrase} = req.body;
  Celebrity.create({name, occupation, catchPhrase})
    .then((celebrityDoc)=>{
      res.redirect("celebrities/index")
    })
    .catch(err =>{
      res.render("celebrity/new.hbs");
    })
  })



  
  router.get('/celebrities/:celebrityId', (req, res, next)=>{
    const {celebrityId} = req.params;
    Celebrity.findById(celebrityId)
      .then((celebrityDoc)=>{
        res.locals.celebrityItem = celebrityDoc;
        res.render("celebrities/show");
      })
      .catch(err=>{
        next(err)
      })
  })
  module.exports = router;
  