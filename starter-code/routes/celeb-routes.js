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
    if(req.session.currentUser){ 
      allTheCelebs.forEach((thisCeleb)=>{
        if(thisCeleb.donor.equals(req.session.currentUser._id) || req.session.currentUser.admin){
          thisCeleb.isMine = true;
        }
      })
    }
    res.render('celeb-views/celebs', {theCelebs: allTheCelebs});
  })
  .catch((err)=>{
    next(err);
  })
  
})

router.get('/add-new-celeb', (req, res, next)=>{
  if(!req.session.currentUser){
    res.redirect('/login');
    return;
  }
  Celeb.find()
  .then((allCelebs)=>{
    res.render('celeb-views/new', {allCelebs});
    //                            ^ this is the same as {allAuthors:allAuthors}
  })
  .catch((err)=>{
    next(err)
  })
})


router.post('/create-the-celeb', (req, res, next)=>{
  if(!req.session.currentUser){
    res.json({message: 'sorry hacker, not allowed'})
    return;
  }
  let theName = req.body.newCelebName;
  let theOccupation = req.body.newCelebOccupation;
  let theCatchPhrase = req.body.newCelebPhrase;
  let theImage = req.body.newCelebImage;

  
 Celeb.create({
    name: theName,
    occupation: theOccupation,
    catchPhrase: theCatchPhrase,
    image: theImage,
    donor: req.session.currentUser._id,
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

  Celeb.findById(id).populate('donor')
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

    if(req.session.currentUser._id != (theCeleb.donor) && !req.session.currentUser.admin){
      res.redirect('/login')
      return
    }


    res.render('celeb-views/edit', {theActualCeleb: theCeleb})

  })
  .catch((err)=>{
    next(err);
  })
})


router.post('/celebs/update/:id', (req, res, next)=>{
  Celeb.findById(req.params.id)
    .then((theCeleb)=>{

  if(req.session.currentUser._id != theCeleb.donor && !req.session.currentUser.admin){
    res.json({message: "Unauthorized Injection"})
    return
  }
  
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

