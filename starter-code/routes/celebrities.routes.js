const express = require('express')
const router = express.Router()

const Celebrity = require('../models/celebrity.model');

// LIST CELEBRITIES 
router.get('/', (req, res) => {

    Celebrity
        .find()
        .then(allCelebrities => {
            // console.log('Celebrities are: ', allCelebrities)
            res.render('celebrities/index', { allCelebrities })
        })    
        .catch(err => console.log(err))
})

// CELEBRITY DETAILS
router.get('/:id', (req, res) => {

    const celebrityId = req.params.id

    Celebrity
        .findById(celebrityId)
        .then(theCelebrity => res.render('celebrities/show', theCelebrity))
        .catch(err => console.log(err))
})

// ADD CELEBRITY
// router.get('/create', (req, res) => res.render('celebrities/new'))

// router.post('/create', (req, res) => {  
    
//     const { name, occupation, catchPhrase } = req.body

//     Celebrity
//         .create({ name, occupation, catchPhrase })
//         .then(() => res.redirect("/celebrities"))
//         .catch(err => console.log(err))
// })


// DELETE CELEBRITY
router.post('/:id/delete', (req, res) => {

    const celebrityId = req.params.id

    Celebrity
        .findByIdAndDelete(celebrityId)
        .then(() => res.redirect('/celebrities'))
        .catch(err => console.log(err))
})

// EDIT CELEBRITY
router.get('/:id/edit', (req, res) => {

    const celebrityId = req.params.id

    Celebrity
        .findById(celebrityId)
        .then(celebrityInfo => res.render('celebrities/edit', celebrityInfo))
        .catch(err => console.log(err))
})

router.post('/:id', (req, res) => {

    const celebrityId = req.params.id     
    const { name, occupation, catchPhrase } = req.body     

    Celebrity
        .findByIdAndUpdate(celebrityId, { name, occupation, catchPhrase })
        .then(() => res.redirect('/celebrities'))
        .catch(err => console.log(err))
})

module.exports = router