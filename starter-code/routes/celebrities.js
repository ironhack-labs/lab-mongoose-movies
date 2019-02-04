const express = require('express');

const router = express.Router();

const Celebrity = require('../models/Celebrity');


//This route display the names of all celebrities
router.get('/celebrities', (req,res,next) =>{
   Celebrity.find()
    .then (allCelebrities =>{
      res.render('celebrities/index', {celebritiesFromDB: allCelebrities})

    })
    .catch (err => console.log("error while getting all celebrities from DB", err))
})

//This route display the details of each celebrity based on the elebrity ID
router.get('/celebrities/:celebrityId', (req,res,next) =>{
  const celebrityId = req.params.celebrityId

  Celebrity.findById(celebrityId).populate('celebrity')
   .then (theCelebrity =>{
     res.render('celebrities/show', {celebrity: theCelebrity})

   })
   .catch (err => console.log("error while getting all celebrities from DB", err))
})

//Route to display form to add new celebrity
router.get('/newCelebrity', (req, res, next) =>{
    res.render('celebrities/new')
})

router.post('/newCelebrity', (req,res,next) => {
    const {name, occupation, catchPhrase} = req.body;
    const newCeleb = new Celebrity({name, occupation, catchPhrase});

    newCeleb.save()
    .then ((celeb) =>{
        console.log("New Celebrity created: ", celeb);
        res.redirect('/celebrities');
    })
    .catch (err => console.log("Error while creating a new celebrity"))
})





module.exports = router;