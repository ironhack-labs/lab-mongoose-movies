const express = require('express')
const router = express.Router()
const Celebrity = require('../models/celebrity');

// Endpoints



router.get('/', (req, res) => {
    Celebrity
        .find()
        .then(cele => {
            res.render('celebrities/celebrities', { cele })
            console.log(cele.name)

        })
})
router.get('/new', (req, res) => {
    res.render('celebrities/new-form')
})
router.post('/new', (req, res) => {
    const { name, ocupation, catchPhrase } = req.body
    const ocupationArr = ocupation.split(',')
    const ocupationAr = ocupationArr.map(str => str.replace(/\s/g, ''));
    
    Celebrity
        .create(
            {
                name: name,
                ocupation: ocupationAr,
                catchPhrase:catchPhrase
        }
    )
        .then(star => {
        res.render('celebrities/detailCelebrity', star)
    })


})


router.post('/:idartist/delete', (req, res) => {
    const idArtist = req.params.idartist
    Celebrity
        .findByIdAndDelete(idArtist)
        .then(result => {
            res.redirect('/celebrities')
    })
        // .then(res.redirect('/celebrities'))
})


router.get('/:idartist/edit', (req, res) => {
    const idArtist = req.params.idartist
Celebrity
        .findById(idArtist)
    .then(artist => { res.render('celebrities/edit-form', artist), console.log(artist.catchPhrase) })

})


router.post('/:idartist/edit', (req, res) => {
    const idArtist = req.params.idartist
    const { name, ocupation, catchPhrase } = req.body
    const ocupationArr = ocupation.split(',')
    const ocupationAr = ocupationArr.map(str => str.replace(/\s/g, ''));
    Celebrity
        .findByIdAndUpdate(idArtist, {
            name: name,
            ocupation: ocupationAr,
            catchPhrase: catchPhrase
        }, { new: true })
        .then(star => {
            res.render('celebrities/detailCelebrity', star)
        })

})


router.get('/:idartist', (req, res) => {
    const idArtist = req.params.idartist

    Celebrity
        .findById(idArtist)
        .then(artist => res.render('celebrities/detailCelebrity', artist))
    
})

module.exports = router
