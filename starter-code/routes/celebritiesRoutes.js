const express = require('express'); //these two will always be the same two first lines
const router  = express.Router();
const Celebrity    = require('../models/celebrity'); //this will also be here but the model will change!


//listOfCelebrities <-- this is the return value of the Celebrity.find
//celebrities <-- this is what follows localhost:3000/celebrities
//celebrityList is the name of the hbs file :)

router.get('/celebrities', (req, res, next) => {
  Celebrity.find()
  .then((listOfCelebrities)=>{
      res.render('celebrityList', {listOfCelebrities});
  })
  .catch((err)=>{
      console.log('go to celebritiesRoutes.js and router.get/celebrities')
      next(err); 
   })
});


router.get('/celebrities/new', (req, res, next) =>{
    res.render('newCelebrity');
});


router.post('/celebrities/create', (req, res, next)=>{
    const newCelebrity = new Celebrity({
        name: req.body.name,
        occupation: req.body.occupation,
        catchPhrase: req.body.catchPhrase,
    })
    
    newCelebrity.save()
    .then((response)=>{
        res.redirect('/celebrities')
    })
    .catch((err)=>{
        next(err);
    }) 
})


router.get('/celebrities/:id/edit', (req, res, next)=>{
    Celebrity.findById(req.params.id)
    .then((theCeleb)=>{
        res.render('editCeleb', {theCeleb})
    })
    .catch((err)=>{
        next(err);
    })
})


router.post('/celebrities/:id/update', (req, res, next)=>{
    Celebrity.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        occupation: req.body.occupation,
        catchPhrase: req.body.catchPhrase,
    })
    .then((theCeleb)=>{
        res.redirect('/celebrities/'+theCeleb._id)
    })
    .catch((err)=>{
        next(err);
    })  
})

router.post('/celebrities/:id/delete', (req, res, next)=>{
    Celebrity.findByIdAndRemove(req.params.id)
    .then((reponse)=>{
        res.redirect('/celebrities');
    })
    .catch((err)=>{
        next(err);
    })
})


//this is a route for a single celeb. Always leave this at the end



router.get('/celebrities/:id', (req, res, next) => {
    const id = req.params.id;
    Celebrity.findById(id)
    .then((theCelebrity)=>{    
      res.render('celebrityDetails',  theCelebrity);
  })
  .catch((err)=>{
     next(err); 
  })
});






module.exports = router;  //this is always the last line!!!!!