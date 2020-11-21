const express = require('express');
const router  = express.Router();
const Celebrity = require('../models/celebrity.model')

/* GET Celebrites page */
router.get('/celebrities', (req, res, next) => {
    Celebrity.find()
    .then((celebrities) => {
        res.render('celebrities', {celebrities});
    })
    .catch(err=>console.log(err));
});

router.get('/celebrities/new', (req,res,next)=>{
    res.render('celebrities/new')
})

router.post('/celebrities/new', (req,res,next)=>{
    Celebrity.create(req.body).then((celebrity)=>{
        res.redirect('/celebrities')
    }).catch((err)=>{
        console.log(err) 
        res.redirect('/celebrities/new')
    })
})

router.get('/celebrities/:id/edit', (req, res, next) => {
    Celebrity.findById(req.params.id)
    .then((celebrityInfo) => {
        res.render('celebrities/edit', celebrityInfo);
    })
    .catch((err) =>{
        console.log(err)
        next(err)
    });
});

router.post('/celebrities/:id/edit', (req, res, next) => {
    Celebrity.findByIdAndUpdate(req.params.id, req.body, { new : true})
    .then((updatedCelebrity) => {
        res.redirect(`/celebrities/${updatedCelebrity._id}`);
    })
    .catch((err) =>{
        console.log(err)
        next(err)
    });
});

router.get('/celebrities/:id', (req, res, next) => {
    Celebrity.findById(req.params.id)
    .then((celebrityInfo) => {
        res.render('celebrities/show', celebrityInfo);
    })
    .catch((err) =>{
        console.log(err)
        next(err)
    });
});

router.post('/celebrities/:id/delete', (req, res, next) => {
    Celebrity.findByIdAndDelete(req.params.id)
    .then(() => {
        res.redirect('/celebrities');
    })
    .catch((err) =>{
        console.log(err)
        next(err)
    });
});


module.exports = router;