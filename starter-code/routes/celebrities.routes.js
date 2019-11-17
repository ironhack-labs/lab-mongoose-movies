const express = require('express');
const router = express.Router();

const Celebrities = require('../models/Celebrities.models')

router.get('/', (req, res) => {
    Celebrities.find()
        .then(allCelebrities => res.render('celebrities/index', {allCelebrities}))
        .catch(err => console.log("Error consultando la BBDD: ", err))
})

router.get('/details/:id', (req, res) => {
    Celebrities.findById(req.params.id)
    .then(celebrity => res.render('celebrities/details', {celebrity}))
    .catch(err => console.log("Error consultando la BBDD", err))
})

router.get('/new', (req,res)=> res.render('celebrities/new'))

router.post('/new', (req, res)=> {
    const { name, occupation, catchPhrase } = req.body
    Celebrities.create({name, occupation, catchPhrase})
    .then(newCelebrity => res.redirect('/celebrities'))
    .catch(err => console.log("Error consultando la BBDD", err))
})

router.get('/:id/delete', (req, res) => {
    Celebrities.findByIdAndRemove(req.params.id)
    .then(() => res.redirect('/celebrities'))
    .catch(err => console.log("Error consultando la BBDD", err))
})

router.get('/:id/edit', (req, res) => {
    Celebrities.findById(req.params.id)
    .then(celebrity => res.render('celebrities/edit', celebrity))
    .catch(err => connsole.log("Error consultando la BBDD", err))
})

router.post('/:id/edit', (req, res) =>{
    const {name, occupation, catchPhrase} = req.body
    Celebrities.findByIdAndUpdate(req.params.id, { name, occupation, catchPhrase })
    .then(() => {
    res.redirect('/celebrities')
    })
    .catch(err => console.log('Error consultando la BBDD', err))
})

module.exports = router;