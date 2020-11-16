const express = require('express');
const router  = express.Router();

const Celebrity = require('./../models/celebrity')


router.get('/', (req, res) => {

    Celebrity
        .find({}, {name: 1})
        .then(allCelebrities => { res.render('/celebrities/index', { allCelebrities }) })
        .catch(err => console.log(err))
    
})


router.get('/show/:celebrity_id', (req, res) => {

    const celebrityId = req.params.celebrity_id

    Celebrity
        .findById(celebrityId)
        .then(theCelebrity => res.render('/celebrities/show', theCelebrity))
        .catch(err => console.log(err))
    
})


router.get('/new', (req, res) => res.render('celebrities/new'))


router.post('/celebrities', (req, res) => {

    const { name, occupation, catchPhrase } = req.body

    Celebrity
        
        .create({ name, occupation, catchPhrase })
        .then(() => res.redirect('/celebrities'))
        .catch(err => console.log('Error:', err))
    
})


router.get('/delete/:celebrity_id', (req, res) => {

    const celebrityId = req.params.celebrity_id

    Celebrity
        .findByIdAndDelete(celebrityId)
        .then(() => res.redirect('/celebrities'))
        .catch(err => console.log('Error:', err))

})


router.get('/edit/:celebrity_id', (req, res) => {

    const { name, occupation, catchPhrase } = req.body
    const celebrityId = req.params.celebrity_id

    Celebrity
        .findByIdAndUpdate(celebrityId, { name, occupation, catchPhrase })
        .then(() => res.redirect('/celebrities'))
        .catch(err => console.log('Error:', err))
    
})


router.post('/edit/:celebrity_id', (req, res) => {

    const { name, occupation, catchPhrase } = req.body
    const celebrityId = req.params.celebrity_id

    Celebrity
        .findByIdAndUpdate(celebrityId, { name, occupation, catchPhrase })
        .then(() => res.redirect('/celebrities'))
        .catch(err => console.log('Error:', err))
    
})


module.exports = router