const express = require('express');
const router = express.Router();
const Celebrity = require('../models/celebrity')


router.get('/', (req, res, next) => {
    Celebrity.find()
    .then(celebridades => res.render('celebrities/index.hbs', {celebridades}))
    .catch(err => next(err))
});

router.get('/new', (req, res, next) => {
    res.render('celebrities/new.hbs')
})

router.post('/new', (req, res, next) => {
    const {name, occupation, catchphrase} = req.body
    const newCelebrity = new Celebrity({name,occupation, catchphrase})
    let createErr = false;
    newCelebrity.save()
    .then(celebrity => res.redirect('/celebrities'))
    .catch(err => {
        createErr = true;
        console.log(`Hubo un error creando el documento -----> ${err}`)
        res.render('celebrities/new.hbs', createErr)
    })
})

router.get('/:id', (req, res, next) => {
    console.log(req.params)
    Celebrity.findOne({_id: req.params.id})
    .then(celebridad => res.render('celebrities/show.hbs', {laCelebridad: celebridad}))
    .catch(err => next(err))
})




module.exports = router;