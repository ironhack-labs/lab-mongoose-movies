const express = require('express')
const router = express.Router()

const Celebrity = require('./../models/celebrity.model')


//Iteration #2: Listing Our Celebrities
router.get('/', (req, res) => {

    Celebrity
        .find()
        .then(allCelebrities => res.render('celebrities/index', { allCelebrities }))
        .catch(err => console.log(err))

})


//Iteration #3: The Celebrity Details Page
router.get('/show/:celebrity_id', (req, res) => {

    const celebrityId = req.params.celebrity_id

    Celebrity
        .findById(celebrityId)
        .then(theCelebrity => res.render('celebrities/show', theCelebrity))
        .catch(err => console.log(err))

})


//Iteration #4: Adding New Celebrities
// render (GET)
router.get('/new', (req, res) => res.render('celebrities/new'))


//create new (POST)
router.post('/new', (req, res) => {

    const { name, occupation, catchPhrase } = req.body

    Celebrity
        .create({ name, occupation, catchPhrase })
        .then(() => res.redirect('/celebrities'))
        .catch(err => console.log('Error:', err))

})



//Iteration #5: Deleting Celebrities
router.post('/delete/:celebrity_id', (req, res) => {

    const celebrityId = req.params.celebrity_id

    Celebrity
        .findByIdAndDelete(celebrityId)
        .then(() => res.redirect('/celebrities'))
        .catch(err => console.log(err))

})


//Iteration #6 (Bonus): Editing Celebrities
// render (GET)
router.get('/edit/:celebrity_id', (req, res) => {

    const celebrityId = req.params.celebrity_id

    Celebrity
        .findById(celebrityId)
        .then(theCelebrity => res.render('celebrities/edit', theCelebrity))
        .catch(err => console.log(err))

})

//edit (POST)
router.post('/edit/:celebrity_id', (req, res) => {
    const celebrityId = req.params.celebrity_id
    const { name, occupation, catchPhrase } = req.body

    Celebrity
        .findByIdAndUpdate(celebrityId, { name, occupation, catchPhrase })
        .then(() => res.redirect('/celebrities'))
        .catch(err => console.log('Error:', err))

})


module.exports = router