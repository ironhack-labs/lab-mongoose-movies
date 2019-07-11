const express = require('express');
const router  = express.Router();
const Celebrity    = require('../models/Celebrity');
const uploadMagic = require('../config/cloundinary-setup');


router.get('/celebrities', (req, res, next)=>{   
  Celebrity.find()
  .then((allTheCelebrities)=>{
      res.render('celebrities/index', {celebrities: allTheCelebrities})
  })
  .catch((err)=>{
      console.log(err);
      next(err);
  })
})

router.get('/celebrities/new', (req, res, next)=>{
  res.render('celebrities/new');
})

router.post('/celebrities/create-new-celebrity',uploadMagic.single('thePic') ,(req, res, next)=>{
  
  let name = req.body.name;
  let occupation = req.body.occupation;
  let catchPhrase = req.body.catchPhrase;
  let image = req.file.url;

  Celebrity.create({
    name: name,
    occupation: occupation,
    catchPhrase: catchPhrase,
    image: image
  })
  .then(()=>{
    req.flash('success', "Successfully create a new celebrity")
      res.redirect('/celebrities')
  })
  .catch((err)=>{
      next(err);
  })
})



router.get('/celebrities/:id', (req, res, next)=>{
  Celebrity.findById(req.params.id)
  .then((oneSingleCelebrity)=>{
    res.render('celebrities/show', {theCelebrity: oneSingleCelebrity})
  })
  .catch((err)=>{
    next(err);
  })
})

router.get('/celebrities/:id/edit', (req, res, next)=>{
  Celebrity.findById(req.params.id)
  .then((celebrityFromDb)=>{
          res.render('celebrities/edit', {celebrity: celebrityFromDb})
  })
  .catch((err)=>{
      next(err);
  })
})

router.post('/celebrities/:id/update', (req, res, next)=>{
  let theID = req.params.id;
  Celebrity.findByIdAndUpdate(theID, req.body)
  .then(()=>{
      req.flash('success', "Successfully update a celebrity")
      res.redirect('/celebrities/'+theID)
  })
  .catch((err)=>{
      next(err);
  })
})
router.post('/celebrities/:id/delete', (req, res, next)=>{

  Celebrity.findByIdAndRemove(req.params.id)
  .then(()=>{
      req.flash('success', "Successfully delete a celebrity")
      res.redirect('/celebrities');
  })
  .catch((err)=>{
      next(err);
  })
})



module.exports = router;