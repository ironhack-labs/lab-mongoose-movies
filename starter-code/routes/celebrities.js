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






module.exports = router;