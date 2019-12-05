const express = require('express');
const router  = express.Router();
const Celeb = require('../models/Celeb');

/* GET home page */
router.get('/', (req, res, next) => {
    res.render('index')
});

router.get('/all-celebs', (req, res, next)=>{
  Celeb.find()
  .then((allTheCelebs)=>{
    res.render('celeb-views/celebs', {theCelebs: allTheCelebs});
  })
  .catch((err)=>{
    next(err);
  })
  
})

router.get('/add-new-celeb', (req, res, next)=>{
  res.render('celeb-views/new');
})


router.post('/create-the-celeb', (req, res, next)=>{
  let theName = req.body.newCelebName;
  let theOccupation = req.body.newCelebOccupation;
  let theCatchPhrase = req.body.newCelebPhrase;
  let theImage = req.body.newCelebImage;

  
 Celeb.create({
    name: theName,
    occupation: theOccupation,
    catchPhrase: theCatchPhrase,
    image: theImage
  })
  .then((response)=>{
    res.redirect('/all-celebs')
  })
  .catch((err)=>{
    next(err)
  })


})

router.get('/celebs/:theIdOfTheCeleb', (req, res, next)=>{
  let id = req.params.theIdOfTheCeleb;

  Celeb.findById(id)
  .then((theCeleb)=>{
    res.render('celeb-views/singleCeleb', {celeb: theCeleb})
  })
  .catch((err)=>{
    next(err);
  })

})

router.get('/celebs/edit/:randomVariableIMadeToHoldTheID', (req, res, next)=>{

  Celeb.findById(req.params.randomVariableIMadeToHoldTheID)
  .then((theCeleb)=>{

    

    res.render('celeb-views/edit', {theActualCeleb: theCeleb})

  })
  .catch((err)=>{
    next(err);
  })
})


router.post('/celebs/update/:id', (req, res, next)=>{
  let id = req.params.id;
  id = req.body.theID;
  
  let update = {...req.body};
 
  
  
  // this stupid {new:true} thing is so that after we edit the book the response we get back shows us the new info isntead of the old info, not sure why this isnt the default
  Celeb.findByIdAndUpdate(id, update, {new: true})
  .then((response)=>{
    console.log(response)
    res.redirect('/celebs/'+id)
  })
  .catch((err)=>{
    next(err)
  })
})



router.post('/celebs/delete/:theID', (req, res, next)=>{
  Celeb.findByIdAndRemove(req.params.theID)
  .then((response)=>{
    res.redirect('/all-celebs');
  })
  .catch((err)=>{
    next(err)
  })

})



module.exports = router;

