const express = require('express');
const router  = express.Router();
const Celebrity   = require('../models/celebrity');

router.get('/celebrities/index', (req, res, next) => {
    Celebrity.find()
    .then((listOfCelebs)=>{
        res.render('celebrities/index', {celebsArray: listOfCelebs});
    })
    .catch((err)=>{
        next(err); 
     })
});

router.get('/celebrities/new', (req, res, next) =>{
    res.render('celebrities/new');
});

router.post('/celebrities/create', (req, res, next)=>{
    const newCeleb = new Celebrity({
     name: req.body.name,
     occupation: req.body.occupation,
     catchPhrase: req.body.catchphrase
    })

    newCeleb.save()
    .then((response)=>{
        res.redirect('/celebrities/index')
    })
    .catch((err)=>{
        res.render('celebrities/new')
    }) 
 
 });

router.get('/celebrities/:id', (req, res, next)=>{
    const theID = req.params.id;
    Celebrity.findById(theID)
    .then((theCeleb)=>{
        res.render('celebrities/show', {celeb: theCeleb})
    })
    .catch((err)=>{
        res.send(err)
    })
  });



module.exports = router;