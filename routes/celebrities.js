const express = require('express')
const router = express.Router()

const Celebrity = require('./../models/celebrity')


router.get('/', (req, res) => {

    Celebrity.find()
        .then(allCelebrities => res.render('celebrities/index', { allCelebrities }))
        .catch(err => console.log("Error in BBDD", err))
})




router.get('/new', (req, res) => {

    res.render("celebrities/new")
})



router.post('/new', (req, res) => {
    const { name, occupation, catchPhrase } = req.body



    Celebrity.create({ name, occupation, catchPhrase })
        .then(newCeleb => {
            console.log("New Celebrity created", newCeleb)
            res.redirect("/")
        })
        .catch(err => console.log("Error creating new celebrity", err))

})




router.get('/:id', (req, res) => {
    Celebrity.findById(req.params.id)
        .then(oneCelebrity => res.render('celebrities/show', oneCelebrity))
        .catch(err => console.log('Error while getting celebrities', err))
})





router.post('/:id/delete', (req, res) => {

    Celebrity
        .findByIdAndRemove(req.params.id)
        .then(res.redirect('/'))
        .catch(err => console.log("Error while deleting", err))
})





router.get('/:id/edit', (req, res) => {
    Celebrity.findById(req.params.id)
        .then(theCelebrity => res.render('celebrities/edit', theCelebrity)
            .catch(err => console.log('Error while editing', err)))
})

router.post('/:id', (req, res) => {
    const { name, occupation, catchPhrase } = req.body

    Celebrity.findByIdAndUpdate(req.params.id, { name, occupation, catchPhrase }, { new: true })
        .then(() => res.redirect("/")
            .catch(err => console.log("Error editing celebrity", err)))

})


module.exports = router
