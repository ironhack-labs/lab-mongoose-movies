const express = require('express')
const router = express.Router()

const Celebrity = require('./../models/celebrity.model')




//MOSTRAR LA LISTA DE LAS CELEBRITIES
router.get('/celebrities', (req, res) => {
    Celebrity
        .find()
        .then(allCelebrities => res.render('celebrities/index', { allCelebrities }))
        .catch(err => {
            console.log("error en la BBDD", err)
            next()
        })
})


//DETALLES DE UNA CELEBRITIE
router.get('/celebrities/:id', (req, res, next) => { 
    Celebrity
        .findById(req.params.id)
        .then(theCelebritie => res.render('celebrities/show', { theCelebritie }))
        .catch(err => {
            console.log("error en la BBDD", err)
            next ()
        })
})


//AÑADIR UNA NUEVA CELEBRITIE
router.get('/celebrities/new', (req, res) => { 
    res.render('celebrities/new')
    
})

router.post('/celebrities/new', (req, res) => {
    const { name, occupation, catchPhrase } = req.body 
    
    Celebrity
        .create({ name, occupation, catchPhrase })
        .then(() => res.redirect('/celebrities'))
        .catch(err => {
            console.log("error en la BBDD", err)
            next()
        })
    
        
})
router.post('/celebrities/:id/delete', (req, res) => {
    Celebrity
        .findByIdAndRemove(req.params.id)
        .then(() => {
            console.log ("hemos llegado hasta aqui")
            res.redirect('/celebrities')
        })
        .catch(err => {
            console.log("error en la BBDD", err)
            next ()
        })
})
//EDITAR CELEBRITIES


router.get('/celebrities/:id/edit', (req, res) => {
    Celebrity
        .findById(req.params.id)
        .then(editCelebritie => {
            
            res.render('celebrities/edit',  editCelebritie )
        })
        .catch(err => {
            console.log("error en la BBDD", err)
            next()
        })
})

router.post('/celebrities/:id', (req, res) => {
    const { name, occupation, catchPhrase } = req.body 
    Celebrity
    .findByIdAndUpdate(req.params.id, { name, occupation, catchPhrase })
    .then(() => res.redirect('/celebrities'))
        .catch(err => {
            console.log("error en la BBDD", err)
            next()
        })
})





module.exports = router
