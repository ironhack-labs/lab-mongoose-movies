const express = require('express')
const router = express.Router()

const Celebrity = require('./../models/Celebrity.model')

//Iteration 2
router.get('/', (req, res) => {
    

    Celebrity
        .find()
        .then(allCelebritiesCreated => {
            // console.log('las celebs son:', allCelebritiesCreated)
            
            res.render('celebrities/index', {allCelebritiesCreated})
        })
        .catch(err => console.log(err))
});
//Iteration 3
router.get('/details/:celebrity_id', (req, res) => {

    const celebId = req.params.celebrity_id

    Celebrity
        .findById(celebId)
        .then(theCelebrity => {
            res.render('celebrities/show', theCelebrity)
        })
        .catch(err => console.log(err))
});

//Iteration 4
router.get('/new', (req, res) => res.render('celebrities/new'))

router.post('/new', (req, res) => {
    const { name, occupation, catchPhrase } = req.body
    
    Celebrity
        .create({ name, occupation, catchPhrase })
        .then(() => res.redirect('/celebrities'))
        .catch(err => console.log(err))
});

//Iteration 5
router.get('/delete-celebrity', (req, res) => {

    const celebId = req.query.celebrity_id

    Celebrity
        .findByIdAndDelete(celebId)
        .then(() => res.redirect('/celebrities'))
    .catch(err => console.log(err))
})

//Iteration 6
router.get('/edit-celebrity', (req, res) => {
    const celebId = req.query.celebrity_id

    Celebrity
        .findById(celebId)
        .then(celebInfo => res.render('celebrities/edit', celebInfo))
        .catch(err => console.log(err))
    })

router.post('/edit-celebrity', (req, res) => {
    const celebId = req.query.celebrity_id

    const { name, occupation, catchPhrase } = req.body
        
    Celebrity
        .findByIdAndUpdate(celebId, { name, occupation, catchPhrase })
        .then(() => res.redirect('/celebrities'))
        .catch(err => console.log(err))

    })
    




module.exports = router
