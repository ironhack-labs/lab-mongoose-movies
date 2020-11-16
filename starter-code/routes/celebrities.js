const express = require('express');
const Celebrity = require('../models/Celebrity');
const router = require('./index');


router.get('/celebrities', (req, res, next) => {
    Celebrity.find()
        .then(celebrities=>{
            res.render('celebrities/index', celebrities)
        })
        .catch(err => {
            next.call
            return err
        })
});

router.get('/celebrities/:id', (req, res, next)=>{
    const celebrityId = req.params.id
    Celebrity.findById(celebrityId)
        .then(celebrity => {
            res.render('celebrities/show', celebrity)
        })
        .catch(err=>{
            next.call
            return err
        })
})

router.get('/celebrities/new', (req, res, next) => {
    res.render('/celebrities/new')
})

router.post('/celebrities', (req, res, next) => {

    const newCelebrity = req.body

    Celebrity.create(newCelebrity)
        .then(() => {
            res.redirect('/celebrities')
        })
        .catch(err => {
            console.log (`Error while creating the new instance`)
            res.render('/celebrities/new')
        })
})

router.post('/celebrities/:id/delete', (req, res, next) => {
    const celebrityId = req.params.id
    Celebrity.findByIdAndDelete(celebrityId)
     .then(() => {
         res.redirect('/celebrities')
     })
     .catch(err => {
         next.call
         return err
     })
})

router.get('/celebrities/:id/edit', (req, res, next) => {
    const celebrityId = req.params.id

    Celebrity.findById(celebrityId)
        .then(celebrity => {
            res.render('edit', celebrity)
        })
        .catch(err => {
            next.call
            return err
        })
})

router.post('/celebrities/:id', (req, res, next) => {
    const celebrityId = req.body.id
    const editedCelebrity = req.body

    Celebrity.findByIdAndUpdate(celebrityId, editedCelebrity)
        .then(() => {
            res.redirect(`/celebrities/${celebrityId}`)
        })
        .catch(err => {
            next.call
            return err
        })
})