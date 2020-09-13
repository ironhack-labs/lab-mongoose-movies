const express = require('express')
const router = express.Router()

const Celebrity = require('../models/celebritymodel')


router.get('/celebrities/index', (req, res) => {

    Celebrity.find()
        .then(data => res.render('celebrities/index', { data }))
        .catch(err => console.log(err))

})


router.get('/celebrities/show/:id', (req, res) => {
    
    Celebrity.findById(req.params.id)
        .then(foundCeleb => res.render('celebrities/show', foundCeleb))
        .catch(err => console.log(err))

})



router.get('/celebrities/new', (req, res) => {

    res.render('celebrities/new')
})

router.post('/celebrities/new', (req, res) => {

    const { name, occupation, catchPhrase } = req.body
    
    Celebrity.create({ name, occupation, catchPhrase })
        .then(() => res.redirect('index'))
        .catch(err => console.log(err))
})


router.get('/celebrities/delete/:id', (req, res) => {

    Celebrity.findByIdAndRemove(req.params.id)
        .then(() => res.render('index', { errorMessage: 'Celebrity eliminada de la base de datos satisfactoriamente!'}))
    .catch(err => console.log(err))
})


 

router.get('/celebrities/edit/:id', (req, res) => {


    Celebrity.findById(req.params.id)
        .then(foundCeleb => res.render('celebrities/edit', foundCeleb))
        .catch(err => console.log(err))
})


router.post('/celebrities/edit/:id', (req, res) => { 

    const {name, occcupation, catchPhrase} = req.body

    Celebrity.findByIdAndUpdate(req.params.id, {name, occcupation, catchPhrase}, {new: true})
        .then(foundCeleb => res.render('celebrities/show', foundCeleb))
        .catch(err => console.log(err))
})





module.exports = router