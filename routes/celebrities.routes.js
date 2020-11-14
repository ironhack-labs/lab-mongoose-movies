const express = require('express')
const router = express.Router()

const Celebrity = require('./../models/celebrity')

router.get('/', (req, res, next) => {

    Celebrity

        .find()
        .then(allCelebrities => res.render('celebrities/index', {allCelebrities}))
        .catch(err => console.log(err))

})

router.get('/show/:id', (req, res) => {

    const celebrityId = req.params.id

    Celebrity
        .findById(celebrityId)
        .then(theCelebrity => res.render('celebrities/show', theCelebrity))
        .catch(err => console.log(err))
})

router.get('/new-celebrity', (req, res) => res.render('celebrities/new-celebrity'))

router.post('/new-celebrity', (req, res) => {

    const { name, occupation, catchPhrase } = req.body

    Celebrity
        .create({ name, occupation, catchPhrase })
        .then(() => res.redirect('/celebrities'))
        .catch(err => {
            res.render('celebrities/new-celebrity')
            console.log("Error", err)
        })
})

router.get('/delete-celebrity', (req, res) => {

    const celebrityId = req.query.id

    Celebrity
        .findByIdAndDelete(celebrityId)
        .then(() => res.redirect('/celebrities'))
        .catch(err => console.log(err))
})

router.get('/edit-celebrity', (req, res) => {

    const celebrityId = req.query.id

    Celebrity
        .findById(celebrityId)
        .then(celebrityInfo => res.render('celebrities/edit-celebrity', celebrityInfo))
        .catch(err => console.log(err))
})

router.post('/edit-celebrity', (req, res) => {

    const celebrityId = req.query.id   
    
    const { name, occupation, catchPhrase } = req.body

    Celebrity
        .findByIdAndUpdate(celebrityId, { name, occupation, catchPhrase })
        .then(celebrityInfo => res.redirect('/celebrities'))
        .catch(err => console.log(err))
})


module.exports = router