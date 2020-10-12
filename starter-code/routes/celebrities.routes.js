const express = require('express')
const router = express.Router()
const CelebrityModel = require('../models/celebrity')


router.get('/celebrities', (req, res, next) => {
    CelebrityModel.find()
        .then((celebrity)=>{
            // console.log(celebrity)
            res.render('./celebrities/index.hbs', {celebrity})
        })
        .catch((err)=>{
           console.log('Error is:', err)
           next()
        })
})


router.get('/celebrities/new', (req, res, next)=>{
    res.render('./celebrities/new.hbs')
})

router.get('/celebrities/:id/edit',(req, res, next)=>{
    CelebrityModel.findById(req.params.id)
    .then((celeb)=>{
        console.log('Data added')
        res.render('celebrities/edit.hbs', {celeb})
    })
    .catch ((err)=>{
        next()
        console.log(err)
    })
})

router.post('/celebrities/new', (req, res)=>{
    CelebrityModel.create(req.body)
        .then(()=>{
            console.log('Data added')
            res.redirect('/celebrities')
        })
        .catch (()=>{
            res.render('/celebrities/new.hbs')
        })
})

router.post('/celebrities/:id/delete', (req, res, next)=>{
    CelebrityModel.findByIdAndRemove(req.params.id)
        .then(()=>{
            console.log('Data deleted')
            res.redirect('/celebrities')
        })
        .catch ((err)=>{
            next()
            console.log(err)
        })
})

router.post('celebrities/:id/edit', (req, res, next)=>{

    let {name, occupation, catchPrase} = req.body
    CelebrityModel.findByIdAndUpdate(req.params.id, {$set: {name, occupation, catchPhrase }})
        .then(()=>{
            res.redirect('/celebrities')
        })
        .catch((err)=>{
            next()
            console.log(err)
        })
    

})

router.get('/celebrities/:id', (req, res, next)=>{

    CelebrityModel.findById(req.params.id)
        .then((celeb)=>{
            // console.log(celeb)
            res.render('./celebrities/show.hbs', {celeb})
        })
        .catch((err)=>{
            console.log('Error is:', err)
           next()
        })
})
module.exports = router





