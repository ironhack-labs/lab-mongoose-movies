const express = require('express')
const router = express.Router()

const Celebrity = require('../models/Celebrity.model')


//ITERATION 2

router.get('/celebrities', (req, res, next) => {
    
    Celebrity
    .find()
    .then(allTheCelebrities => res.render('../views/celebrities/index', { allTheCelebrities }))
    .catch(err => console.log("Error en la BBDD", err))
})
 
//ITERATION 3

router.get('/celebrities/:id', (req, res, next) => {

    Celebrity
    .findById(req.params.id)
    .then(theCelebrity => res.render('../views/celebrities/show.hbs', { theCelebrity }))
    .catch(err => console.log("Error en la BBDD", err))
})
   
//ITERATION 4

router.get('/new', (req, res) => {res.render('celebrities/new')})

router.post('/new', (req, res) => {

    const { name, occupation, catchPhrase } = req.body
    
    Celebrity
    .create({ name, occupation, catchPhrase })
    .then(() => res.redirect('/celebrities'))
    .catch(err => { console.log("Error en la BBDD", err)
        res.redirect('/new')
        next()
    })
})

//ITERACION 5
    
router.post('/celebrities/:id/delete', (req, res) => {

    Celebrity
    .findByIdAndRemove(req.params.id)
    .then (() => res.redirect(`/celebrities`))
    .catch(err => console.log('Error en la BBDD', err))
})

//ITERACION 6

router.get("/:id/edit", (req, res) => {

    Celebrity
    .findById(req.params.id)
    .then((theCelebrity) => res.render(`../views/celebrities/edit.hbs`, theCelebrity))
    .catch((err) => console.log("Error en la BBDD", err));
});


router.post("/celebrities/:id", (req, res) => {
  const { name, occupation, catchPhrase } = req.body;

    Celebrity
    .findByIdAndUpdate(req.params.id, { name, occupation, catchPhrase }, { new: true })
    .then(() => res.redirect(`/celebrities/ ${req.params.id}`))
    .catch((err) => console.log("Error en la BBDD", err));
});

module.exports = router