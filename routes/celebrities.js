const express = require('express')
const router = express.Router()

const Celebrity = require('./../models/celebrity')


router.get('/', (req, res, next) => {

    Celebrity.find()
        .then(allCelebrities => res.render('celebrities/index', { allCelebrities }))
        .catch(err => console.log("Error en la BBDD", err))
})




router.get('/new', (req, res) => res.render("celebrities/new"))

router.post('/new', (req, res) => {
    const { name, occupation, catchPhrase } = req.body

    Celebrity.create({ name, occupation, catchPhrase })
        .then(newCeleb => {
            console.log("New Celebrity created", newCeleb)
            res.redirect("/celebrities")
        })
        .catch(err => console.log("Error creating new celebrity", err))

})

router.get('/celebrities/:id', (req, res, next) => {
    Celebrity.findById(req.params.id)
        .then(oneCelebrity => res.render('celebrities/show', oneCelebrity)
            .catch(err => console.log('Error while getting celebrities', err)))
})





router.post('/:id/delete', (req, res) => {

    Celebrity
        .findByIdAndRemove(req.params.id)
        .then(res.redirect('/celebrities'))
        .catch(err => console.log("Error while deleting", err))
})





router.get('/celebrities/:id/edit', (req, res, next) => {
    Celebrity.findById(req.params.id)
        .then(editedCelebrity => res.render('celebrities/edit', editedCelebrity)
            .catch(err => console.log('Error while editing', err)))
})

router.post('/celebrities/:id', (req, res) => {
    const { name, occupation, catchPhrase } = req.body

    Celebrity.findByIdAndUpdate(req.params.id, { name, occupation, catchPhrase }, { new: true })
        .then(() => res.redirect("/celebrities")
            .catch(err => console.log("Error editing celebrity", err)))

})






module.exports = router
