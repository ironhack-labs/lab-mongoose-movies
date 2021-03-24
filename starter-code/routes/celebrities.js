const express = require('express');
const { route } = require('../app');
const Celebrity = require('../models/celebrity')
const router  = express.Router();

/* GET home page */
router.get('/celebrities', (req, res, next) => {
    Celebrity.find()
    .then(celebrity =>{
        res.render('celebrities', { celebrity });
    })
    .catch(error =>{
        console.log(error)
    })
});

router.get('/celebrities/:celebrityId', (req, res, next) => {
    const { celebrityId } = req.params

    Celebrity.findById(celebrityId)
    .then(celebrity =>{
        res.render('show', { celebrity })
    })
    .catch( error => {
        next()
        console.log(error)
    })
})

router.get('/celebrities/new', (req, res, next) => {
    res.render('new')
})

router.post('/celebrities/new', (req, res, next) => {
    const { name, occupation, catchPhrase } = req.body

    const newCelebrity = {
        name: name,
        occupation: occupation,
        catchPhrase: catchPhrase
    }

    Celebrity.create(newCelebrity)
    // .save(newCelebrity)
    .then(() =>{
        res.redirect('/celebrities')
    })
    .catch(error => {
        res.redirect('/celebrities/new')
        console.log(error)
    })
})

router.post('/celebrities/:id/delete', (req, res, next) =>{
    const { id } = req.params

    Celebrity.findByIdAndDelete(id)
    .then(() =>{
        res.redirect('/celebrities')
    })
    .catch(error =>{
        next()
        console.log(error)
    })
})

router.get('/celebrities/:id/edit', (req, res, next) =>{
    const { id } = req.params

    Celebrity.findById(id)
    .then(celebrity =>{
        res.render('edit', { celebrity })
    })
    .catch(error =>{
        next()
        console.log(error)
    })
})

router.post('/celebrities/:id', (req, res, next) =>{
    const { id } = req.params
    const { name, occupation, catchPhrase } = req.body

    Celebrity.findByIdAndUpdate(id, {name: name, occupation: occupation, catchPhrase: catchPhrase})
    .then(() =>{
        res.redirect('/celebrities')
    })
    .catch(error =>{
        next()
        console.log(error)
    })
})

module.exports = router;