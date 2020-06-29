const express = require('express')
const router = express.Router()

const Celebrity = require('./../models/celebrity.model')

//All Celebs

router.get('/listado', (req, res) => {
    Celebrity.find()
        .then(allCelebrities => res.render('celebrities/list', {
            allCelebrities
        }))
        .catch(err => console.log("DDBB Error", err))
})


//Celeb details

router.get('/detalle/:celebId', (req, res) => {
    Celebrity.findById(req.params.celebId)
        .then(theCelebrity => res.render('celebrities/details', theCelebrity))
        .catch(err => console.log("DDBB Error", err))
})

//Create Celebs

router.get('/crear', (req, res) => res.render('celebrities/create-form'))

router.post('/crear', (req, res) => {
    const {
        name,
        occupation,
        catchPhrase
    } = req.body
    Celebrity
        .create({
            name,
            occupation,
            catchPhrase
        })
        .then(() => res.redirect('listado'))
        .catch(err => console.log("DDBB Error", err))
})



module.exports = router