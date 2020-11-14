const express = require('express');
const router = express.Router();
const mongoose  = require('mongoose')
const Celebrity = require('../models/celebrity.js');

router.get('/', (req, res, next) => {
    Celebrity.find({}, {name: 1})
    .then((celebrity)=>{
        res.render('celebrities/index', {celebrity})
    })
    .catch((error)=>{
        console.log(error)
        res.send(error)
    })
})

router.post('/', (req, res, next) => {
    Celebrity.create(req.body)
    .then(result => {
        console.log(result)
        res.redirect('/celebrities')
    })
    .catch((error)=>{
        console.log(error)
        res.send(error)
    })
})

router.get('/new', (req,res, next) => {
    res.render('celebrities/new')
  })

router.get('/:id', (req, res, next) => {
    const celebrityID = req.params.id

    Celebrity.findById(celebrityID)
    .then((celebrity)=>{
        res.render('celebrities/show', celebrity)
    })
    .catch((error)=>{
        console.log(error)
        res.send(error)
    })
})

router.post('/:id', (req, res, next) => {

    const celebrityID = req.params.id
    Celebrity.findByIdAndUpdate(celebrityID, req.body)

    .then(result => {
        console.log(result)
        res.redirect('/celebrities')
    })
    .catch((error)=>{
        console.log(error)
        res.send(error)
    })
})

router.post('/:id/delete', (req, res, next) => {

    const celebrityID = req.params.id
    Celebrity.findByIdAndRemove(celebrityID)

    .then(result => {
        console.log(result)
        res.redirect('/celebrities')
    })
    .catch((error)=>{
        console.log(error)
        res.send(error)
    })
})









module.exports = router;