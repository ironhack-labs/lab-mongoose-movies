const express = require('express');
const router = express.Router();

const Celebrity = require('../models/celebrity.model')

router.get('/', (req, res, next) => {
    Celebrity.find()
        .then(allCelebrities => res.render('celebrities/index', {
            celebrities: allCelebrities
        }))
        .catch(err => {
            console.log('error en consultando BBDD: ', err)
        })
})
router.get('/details/:id', (req, res) => {
    Celebrity.findById(req.params.id).then(theCelebrities => res.render('celebrities/show', {
            celebrity: theCelebrities
        }))
        .catch(err => console.log("Error consultando la BBDD: ", err))
})

router.get('/new', (req, res) => res.render('celebrities/new'))

router.post('/new', (req, res) => {
    const {
        name,
        occupation,
        catchPhrase
    } = req.body

    Celebrity.create({
            name,
            occupation,
            catchPhrase
        })
        .then(x => res.redirect('/celebrities'))
        .catch(err => 'error: ' + err)
})

module.exports = router