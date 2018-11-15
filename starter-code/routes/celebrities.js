const express = require('express');
const router  = express.Router();
const Celebrity = require('../models/celebrity')
/* GET celebrities page */





router.get('/celebrities', (req, res, next) => {
    Celebrity.find()
    .then((eachCelebrity)=>{   
        
        res.render('celebrities/index', {celebrities: eachCelebrity});
    })
    .catch((err)=>{
        next(err)
    })
});







router.get('/celebrities/new', (req,res,next)=>{
        res.render('celebrities/new')
})

router.post('/celebrities/new', (req, res, next)=>{
    Celebrity.create(req.body)
    .then(()=>{
        res.redirect('/celebrities')
    })
    .catch((err)=>{
        next(err);
    })
})

router.get('/celebrities/:id', (req, res, next) => {
    Celebrity.findById(req.params.id)
    .then((eachStar)=>{   
        res.render('celebrities/show', {Stars : eachStar});
    })
    .catch((err)=>{
        next(err)
    })
});

router.post('/celebrities/:id/delete' , (req,res,next)=>[
   Celebrity.findByIdAndRemove(req.params.id)
   .then(()=>{
       res.redirect('/celebrities')
   })
   .catch((err)=>{
       next(err)
   })
])

router.get('/celebrities/:id/edit', (req,res,next)=>{
    Celebrity.findById(req.params.id)
    .then((theStar)=>{
        res.render('celebrities/edit' , {theStar: theStar})
    })
    .catch((err)=>{
        next(err)
    })
})

router.post('/celebrities/:id/edit' , (req,res,next)=>{
    Celebrity.findByIdAndUpdate(req.params.id , req.body)
    .then(()=>{
        res.redirect('/celebrities/'+req.params.id);
    })
    .catch((err)=>{
        next(err)
    })
})





module.exports = router;