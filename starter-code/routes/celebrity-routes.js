const express = require('express');
const router  = express.Router();
const Celebrity   = require('../models/Celebrity');



router.get('/celebrities', (req, res, next) => {
    Celebrity.find()
    .then((celebrityDB)=>{
      res.render('Celeb/celeb-page', {celebrities: celebrityDB});
    })
    .catch((err)=>{
      next(err)
  
    })
});
router.get('/celebrities/new', (req, res, next) => {
    res.render("Celeb/new-celeb");
});

router.post('/celebrities/create', (req, res, next)=>{
    Celebrity.create(req.body)
    .then(()=>{
        res.redirect('/celebrities');
    })
    .catch((err)=>{
        next(err)
    })
})

router.get('/celebrities/:theIdThing/edit', (req, res, next)=>{
    Celebrity.findById(req.params.theIdThing)
    .then((celeb)=>{
     res.render('Celeb/celeb-edit', {celeb: celeb})
    })
    .catch((err)=>{
        next(err);
    })
});


router.post('/celebrities/:id/update', (req, res, next)=>{

    Celebrity.findByIdAndUpdate(req.params.id, req.body)
    .then(()=>{
        res.redirect('/celebrities/'+req.params.id);
    })
    .catch((err)=>{
        next(err)
    })
})



router.get('/celebrities/:theID', (req, res, next)=>{
    Celebrity.findById(req.params.theID)
    .then((celebInfoFromDB)=>{
        res.render('Celeb/celebrity-details', {theCeleb: celebInfoFromDB})
    })
    .catch((err)=>{
        next(err);
    })
})
router.post('/celebrities/:id/delete', (req, res, next)=>{
    Celebrity.findByIdAndRemove(req.params.id)
    .then(()=>{
        res.redirect('/celebrities')
    })
    .catch((err)=>{
        next(err);
    })
})


module.exports = router;
  