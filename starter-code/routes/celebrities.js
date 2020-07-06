const express = require('express');
const router = express.Router();
const Celebrities = require ('../models/celebrity.model');


router.get('/celebrities', (req, res, next) => {
    Celebrities.find({})
        .then(celebritiesAll => { 
            res.render('celebrities/index', {celebritiesAll})
        })
        .catch(e => {
            console.log("Error search celebrities", e)
            res.redirect('/')
        })
})

router.post('/celebrities', (req, res, next) => {
    Celebrities.create(req.body)
        .then(celebrity => { 
            console.log(`${celebrity.name} add to database`);
            res.redirect('/celebrities')
        })
        .catch(e => {
            console.log("Error add celebrity to database", e)
            res.redirect('/celebrities/new')
        })
})

router.get('/celebrities/new', (req, res, next) => {
    res.render('celebrities/new')
})

router.post('/celebrities/:id/delete', (req, res, next) => {
    Celebrities.findByIdAndDelete(req.params.id)
        .then(()=> {
            console.log('Celebrity deleted');
            res.redirect('/celebrities')
        })
        .catch(e => {
            console.log("Error celebrity", e)
            res.redirect('not-found')
        })
})

router.get('/celebrities/:id/edit', (req, res, next) => {
    Celebrities.findById(req.params.id)
        .then(celebrity=> {
            res.render('celebrities/edit', {celebrity})
        })
        .catch(e => {
            console.log("Error celebrity", e)
            res.redirect('not-found')
        })
})

router.post('/celebrities/:id', (req, res, next) => {
    Celebrities.findByIdAndUpdate(req.params.id, req.body)
        .then(celebrity=> {
            res.redirect('/celebrities')
        })
        .catch(e => {
            console.log("Error celebrity", e)
            res.redirect('not-found')
        })
})

router.get('/celebrities/:id', (req, res, next) => {
    Celebrities.findById(req.params.id)
        .then(celebrity=> {
            res.render('celebrities/show', {celebrity})
        })
        .catch(e => {
            console.log("Error celebrity", e)
            res.redirect('/celebrities')
        })
})



module.exports = router;