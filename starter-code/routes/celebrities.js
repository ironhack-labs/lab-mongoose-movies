const express = require('express')

const celebrityModel = require('../models/celebrity')

const router = express.Router()


router.get('/celebrities', (req,res, next)=>{
    celebrityModel.find()
    .then((celebrity) =>{
        console.log(celebrity)
        res.render('celebrities/index.hbs', {celebrity})
    })
    .catch((err) =>{
        console.log("Problem with the collection", err)
    })
})


router.get('/celebrities/new', (req,res, next)=>{
    res.render('celebrities/new.hbs')

 })

router.post('/celebrities/new', (req, res) =>{
 celebrityModel.create(req.body)
 .then(()=>{
     res.redirect('/celebrities')
 })
 .catch(()=>{
     res.redirect('/celebrities/new');
     console.log('Couldnt create celebrity')
 })
})   


router.get('/celebrities/:id', (req,res, next)=>{
    let id = req.params.id
    celebrityModel.findById(id)
    .then((celebrity) =>{
        console.log(celebrity)
        res.render('celebrities/show.hbs', {celebrity})
    })
    .catch((err) =>{
        console.log("Problem with the collection", err)
    })
})  

router.post('/celebrities/:id/delete', (req,res, next)=>{
    let id = req.params.id
       celebrityModel.findByIdAndDelete(id)
    .then((celebrity) =>{
        console.log(celebrity)
        res.redirect('/celebrities')
    })
    .catch((err) =>{
        console.log("Couldnt delete celebrity", err)
    })
})  

module.exports = router