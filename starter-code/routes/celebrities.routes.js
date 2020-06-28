const express = require('express');
const router = express.Router();
const Celebrity = require('../models/Celebrity.model');
const {response} = require('express');

// ----- GET CELEBRITIES -----  
router.get('/celebrities', (req, res, next) =>

    Celebrity.find()
    .then(allTheCelebrities => res.render('../views/celebrities/index.hbs', {
        allTheCelebrities
    }))
    .catch(err => console.log("Error al leer BBDD", err))
)


// --- GET A CELEBRITY ----

router.get('/celebrities/:id', (req, res, next) =>

    Celebrity.findById(req.params.id)
    .then(theCelebrity => res.render('../views/celebrities/show', {
        theCelebrity
    }))
    .catch(err => console.log("Error al leer BBDD", err))
)


// --- REMOVE CELEBRITY --
router.post('/celebrities/:id/delete', (req, res) => {

    Celebrity
        .findByIdAndRemove(req.params.id)
        .then(() => res.redirect('/celebrities'))
        .catch(err => console.log("Error al leer BBDD", err))

})


// --- ADD MOVIES ---
router.get('/new', (req, res, next) =>
    res.render('celebrities/new')
)

router.post('/new', (req, res) => {

    const { name, occupation, catchPhrase} = req.body

    Celebrity
        .create(req.body)
        .then(() => res.redirect('/celebrities'))
        .catch(err => {console.log("Try Again", err)
            res.redirect('/')
        })


})

//  ---- ITERATION 6 ----

router.get('/:id/edit', (req, res, next) =>

    Celebrity.findById(req.params.id)
    .then(theCelebrity => res.render('../views/celebrities/edit.hbs', { theCelebrity
    }))
    .catch(err => console.log("Error al leer BBDD", err))
)

router.post('/:id', (req, res) => {
       
    const { name, occupation, catchPhrase } = req.body
    
    Celebrity
        .findByIdAndUpdate(req.params.id, { name, occupation, catchPhrase }, { new:true})
        .then(() => res.redirect(`/celebrities/${req.params.id}`))
        .catch(err => console.log("Error al leer BBDD", err))


})

module.exports = router