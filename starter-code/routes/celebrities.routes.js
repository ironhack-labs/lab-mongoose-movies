const express = require('express')
const router = express.Router()

const Celebrity = require('./../models/celebrity.model')


router.get('/listado', req, res) => {
    Celebrity.find()
    .then(allCelebrities => res.render('celebrities/list', {
        allCelebrities
    }))
    .catch(err => console.log("Error", err))
})

//Detalles
router.get('/detalle/:celeId', (req, res) => {
    Celebrity.findById(req.params.celebId)
    .then(theCelebrity => res.render('celebrities/details',theCelebrity ))
    .catch(err => console.log("Error",err ))

})

//Crear
router.get('/crear,' (req, res) => res.render('celebrities/create-form'))

router.post('/crear', (req, res) => {
    const {
        name,
        occupation,
        catchPhrase
    } = req.body
    Celebrity
       .create ({
           name,
           occupation,
           catchPhrase
       })
       .then(() => res.redirect('listado'))
       .catch(err => console.log("Error", err))

    })

    //Borrar
router.post('/:id/borrar', (req,res) => {
   Celebrity.findByIdAndDelete(req.params.id)
   .then(theCelebrity => res.render('celebrities/list', theCelebrity))
    .catch(err => console.log("Error", err))
})

//Editar
router.get('/editar', (req,res) => {
    Celebrity
        .findById(req.query.celebId)
        .then(theCeleb => res.render('celebrities/edit-form', theCeleb))
        .catch(err => console.log("Error", err))

    })

router.post('/editar/:celebId', (req,res) => {
    const {
        name,
        occupation,
        catchPhrase
    } = req.body

    Celebrity
    .findByIdAndUpdate(req.params.celebId, {
        name,
        occupation,
        catchPhrase
    },{
        new: true
    })
    .then(() => res.redirect(`/celebrities/detalle/${req.params.celebId}`))
    .catch(err => console.log("Error", err))

})

module.exports = router











