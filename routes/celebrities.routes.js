const express = require('express')
const router = express.Router()

const Celebrity = require('./../models/celebrity.model')


//CELEBRITIES LIST
router.get('/', (req, res) => {

    Celebrity
        .find({}, { name: 1 })
        .sort({ name: 1 })
        .then(allCelebrities => {
            res.render('celebrities/list', { allCelebrities })
        })
})


//CELEBRITIES DETAILS
router.get('/details/:celebrity_id', (req, res) => {

    const celebrityId = req.params.celebrity_id

    Celebrity
        .findById(celebrityId)
        .then(theCelebrity => {
            res.render("celebrities/details", theCelebrity)
        })

})

//NEW CELEBRITY
router.get('/new', (req, res) => res.render('celebrities/new'))

//NEW CELEBRITY POST


router.post('/new', (req, res) => {

    const { name, occupation, catchPhrase } = req.body
    Celebrity
        .create({ name, occupation, catchPhrase })
        .then(() => res.redirect('/celebrities'))
        .catch(err => console.log('Error:', err))
})


//DELETE

router.get('/delete/:celebrity_id', (req, res) => {

    const celebrityId = req.params.celebrity_id
    console.log(celebrityId)


    Celebrity
        .findByIdAndDelete(celebrityId)
        .then(() => res.redirect('/celebrities'))

}
)

//EDIT CELEBRITY GET
router.get('/edit/:celebrity_id', (req, res) => {


    const celebrityId = req.params.celebrity_id

    Celebrity
        .findById(celebrityId)
        .then(theCelebrity => {
            res.render("celebrities/edit", theCelebrity)
        })
})

//EDIT CELEBRITY POST


router.post('/edit/:celebrity_id', (req, res) => {

    const { name, occupation, catchPhrase } = req.body
    const celebrityId = req.params.celebrity_id
    Celebrity
        .findByIdAndUpdate(celebrityId, { name, occupation, catchPhrase })
        .then(() => res.redirect('/celebrities'))
        .catch(err => console.log('Error:', err))
})



module.exports = router