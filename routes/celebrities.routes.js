const express = require('express')
const router = express.Router()

const Celebrity = require('./../models/celebrity.model')





router.get('/', (req, res) => {
    Celebrity.find()
        .then(celebritiesArr => res.render('celebrities.views/index', {
            celebritiesArr
        }))
        .catch(error => console.log('Error: ', error))
})



router.get('/new', (req, res) => res.render('celebrities.views/new'))

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
        .then(() => res.redirect('/celebrities'))
        .catch(error => console.log('Error: ', error))

})




router.get('/:celebrityID', (req, res) => {

    Celebrity.findById(req.params.celebrityID)
        .then(celebrity => res.render('celebrities.views/show', celebrity))
        .catch(error => console.log('Error: ', error))
})



router.post('/:id/delete', (req, res) => {

    Celebrity.findByIdAndRemove(req.params.id)
        .then(() => res.redirect('/celebrities'))
        .catch(error => console.log('Error: ', error))

})



router.get('/:id/edit', (req, res) => {

    Celebrity.findById(req.params.id)
        .then(celebrity => res.render('celebrities.views/edit', celebrity))
        .catch(error => console.log('Error: ', error))
})


router.post('/:id', (req, res) => {

    const {
        name,
        occupation,
        catchPhrase
    } = req.body

    Celebrity.findByIdAndUpdate(req.params.id, {
            name,
            occupation,
            catchPhrase
        })
        .then(() => res.redirect(`/celebrities/${req.params.id}`))
        .catch(error => console.log('Error: ', error))
})





module.exports = router