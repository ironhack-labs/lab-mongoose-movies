const express = require('express')
const router = express.Router()

const Celebrity = require('./../models/celebrity.model')


// Endpoints


// Listado de celebridades
router.get('/', (req, res) => {
    // res.send('PRUEBA')

    Celebrity
        .find()
        // .sort({ title: 1 })                                                 
        .then(allCelebrities => res.render('celebrities/index', { allCelebrities }))
        .catch(err => console.log(err))
})