const express = require('express');
const router  = express.Router();
const Celebrity    = require('../models/celebrity')

/* GET home page */
router.get('/celebrities', (req, res, next) => {

  Celebrity.find()
  .then((theThingsWeGet)=>{
    console.log(theThingsWeGet)
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

  console.log(celebName,celebOcc,celebPhrase)

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