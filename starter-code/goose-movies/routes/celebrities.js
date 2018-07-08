
//Calls expressJS
const express = require('express');

//Express router function.
const router = express.Router();

//Calls the Celebrity Model in Models
const Celebrity = require('../models/celebritymodelfile')




//Locating route for page to make a new celebrity. new.hbs has the form that calls post
router.get('/celebrities/new', (req, res, next)=>{
  res.render('celebrities/new')
})

//method that modifies information in database by adding a new celebrity
router.post('/celebrities/', (req, res, next)=>{
  const newCelebrity = new Celebrity({
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase,
  })

//this saves the info in mongodb
newCelebrity.save()
.then((response)=>{
  res.redirect('/celebrities/')
})
.catch((err)=>{
  next(err);
  res.redirect('/celebrities/new')
})
})



router.post('/celebrities/:id/delete',(req, res, next)=>{
  Celebrity.findByIdAndRemove(req.params.id)
  .then((response)=>{
    res.redirect('/celebrities');
  })
  .catch((err)=>{
    next(err);
  })
})














//Leaving these two at the bottom to work after every edit



//GET celebrities page
router.get('/celebrities', (req, res, next) => {
  Celebrity.find()
  .then((listOfCelebrities)=>{
    res.render('celebrities/index', {listOfCelebrities});
  })
  .catch((err)=>{
    next(err);
  })
});


router.get('/celebrities/:id', (req, res, next)=>{
  const theId = req.params.id;
  Celebrity.findById(theId)
  .then((theCelebrity)=>{
    //there's a way to link this so that I only need to put 'celebrityDetails',
    //however for the sake of time, this eludes me at this code's writing time.
    res.render('celebrities/show', theCelebrity);
  })
  .catch((err)=>{
    next(err);
  })
});









//this sends this file to the router so that the app can see this file and apply the logic
module.exports = router;