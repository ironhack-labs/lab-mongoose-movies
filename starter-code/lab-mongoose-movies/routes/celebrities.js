const express = require('express');
const router  = express.Router();
const Celebrity    = require('../models/celebrity')

/* GET home page */
router.get('/celebrities', (req, res, next) => {

  Celebrity.find()
  .then((theThingsWeGet)=>{
 
    res.render('allCelebs', {listOfCelebs: theThingsWeGet});
  
  })
  .catch((err)=>{
    console.log(err)
  })
  

});


router.get('/celebrities/new', (req,res,next)=>{
  res.render('new');
})

router.post('/celebrities/create', (req,res,next)=>{
  // console.log("works here")
  const celebName = req.body.newName;
  const celebOcc = req.body.newOccpation;
  const celebPhrase = req.body.newCatchphrase;


  Celebrity.create({
    name: celebName,
    occupation: celebOcc,
    catchphrase: celebPhrase
  })
  .then((response)=>{
    res.redirect('/celebrities')
  })
  .catch((err)=>{
    res.redirect('/celebrities/new')
  })

})

router.post('/celebrities/delete/:celebID', (req, res, next)=>{
  // console.log('=-=-=-=-=-=-=-=-=-=')
  Celebrity.findByIdAndRemove(req.params.celebID)
  .then((response)=>{
    res.redirect('/celebrities')
  })
  .catch((err)=>{
    next(err)
  })
})

router.get('/celebrities/edit/:celebID', (req,res,next) =>{
  // console.log('=-=-=-=-=-=-=-=-=-=')

  Celebrity.findById(req.params.celebID)
  .then((theThingWeGet)=>{
    res.render('edit', {theID: theThingWeGet})
  })
  .catch((err)=>{
    next(err)
  })
})


router.post('/celebrities/update/:celebID', (req, res, next)=>{
  const newName = req.body.updatedName
  const newOccpation = req.body.updatedOccupation
  const newCatchphrase = req.body.updatedCatchphrase
  
  console.log("=-=-=-=-=-=-", newName, newOccpation, newCatchphrase)
  Celebrity.findByIdAndUpdate(req.params.celebID, {
    name: newName,
    occupation: newOccpation,
    catchphrase: newCatchphrase
  })
  .then((response)=>{
    res.redirect('/celebrities')
  })
  .catch((err)=>{
    next(err)
  })

})

router.get('/celebrities/:celebID', (req,res,next)=>{

  Celebrity.findById(req.params.celebID)
  .then((theThingWeGet)=>{
    res.render('show', {theCelebInfo: theThingWeGet})
  })
  .catch((err)=>{
    console.log(err);
  })

})



module.exports = router;