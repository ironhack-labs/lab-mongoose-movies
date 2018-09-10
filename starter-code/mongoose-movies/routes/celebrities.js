const express = require('express');
const router  = express.Router();
const Celebrity   = require('../models/celebrity')

router.get('/celebrities', (req, res, next) => {

    Celebrity.find()
    .then((theStuffWeGetBack)=>{
        console.log(theStuffWeGetBack)
        res.render('allCelebrities', {listOfcelebrities: theStuffWeGetBack})
    })
    .catch((err)=>{

    })
});

router.get('/celebrities/:theCelebrityID', (req, res, next)=>{

    Celebrity.findById(req.params.theCelebrityID)
    .then((theActualCelebrity)=>{

        console.log('=-=-=-=-=-=-=-=-=-=--=-',theActualCelebrity)

        res.render('details', {theCelebrity: theActualCelebrity})

    })
    .catch((err)=>{
console.log('!!!!!!!!!!!!!!',err)
    })
    
})


router.get('/celebrities/edit/:celebrityid', (req, res, next)=>{
    Celebrity.findById(req.params.celebrityid)
    .then((theCelebrity)=>{
        res.render('editCelebrity', {celebrity: theCelebrity});
    })
    .catch((err)=>{
        next(err);
    })
})

router.post('/celebrities/update/:id', (req, res, next)=>{
    const theTitle = req.body.celebrityName;
    const theOccupation = req.body.occupation;
    const thePhrase = req.body.catchPhrase;

 
 
 
     Celebrity.findByIdAndUpdate(req.params.id, {
         name: theTitle,
         occupation: theOccupation,
         thePhrase: catchPhrase,

     })
     .then((response)=>{
         res.redirect('/celebrities/'+req.params.id)
     })
     .catch((err)=>{
        next(err);
     })
 
     console.log('body:', req.body)
 
 })


module.exports = router;