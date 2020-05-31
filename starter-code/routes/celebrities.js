const express = require('express');
const router = express.Router();
const mongoose = require('mongoose')
const Celebrity = require('../models/celebrity')


router.get('/', (req, res, next) => {
    Celebrity.find()
    .then(celebridades => res.render('celebrities/index.hbs', {celebridades}))
    .catch(err => next(err))
});

router.get('/new', (req, res, next) => {
    res.render('celebrities/new.hbs')
})

router.post('/', (req, res, next) => {
    const {name, occupation, catchPhrase} = req.body
    const newCelebrity = new Celebrity({name, occupation, catchPhrase})
    let createErr = false;
    try {
        newCelebrity.save()
            .then(celebrity => res.redirect('/celebrities'))
            .catch(err => {
                console.log(`Hubo un error creando el documento -----> ${err}`)
            })
    } catch(err) {
        createErr = true;
        res.render('celebrities/new.hbs', createErr)
    }
    
})

router.get('/:id', (req, res, next) => {
    Celebrity.findOne({_id: req.params.id})
    .then(celebridad => res.render('celebrities/show.hbs', {laCelebridad: celebridad}))
    .catch(err => next(err))
})

router.post('/:id/delete', (req, res, next) => {
    console.log(req.params)
    Celebrity.findOneAndDelete({_id: new mongoose.mongo.ObjectID(req.params.id)})
    .then((elem) => {
        console.log(elem)
        res.redirect('/celebrities')})
    .catch(err => next(err))
})

router.post('/:id', (req, res, next) => {
    const {name,occupation,catchPhrase} = req.body;
    Celebrity.findByIdAndUpdate(req.params.id, {$set: {name,occupation,catchPhrase}}, {new: true})
        .then(celebrity => {
            res.redirect('/celebrities')
        })
        .catch(err => next(err))
})

router.get('/:id/edit', (req,res, next) => {
    Celebrity.findOne({_id: req.params.id})
    .then(celebrity => res.render('celebrities/edit.hbs', {celebrity}))
    .catch(err => next(err))
})







module.exports = router;