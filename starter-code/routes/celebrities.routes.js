const express = require('express')
const router = express.Router()

const Celebrity = require('../models/celebrity.model')

router.get('/', (req, res, next) => { 
    
    Celebrity.find()
        .then(celebrities => res.render('celebrities/index-celebrities', { celebrities }))
        .catch(err => {
            console.log('Error! ', err)
            next()
        })
})


router.get('/new', (req, res) => res.render('celebrities/celebrities-new'))
router.post('/new', (req, res) => {  //falta el save method()

    const { name, occupation, catchPhrase } = req.body

    Celebrity.create({ name, occupation, catchPhrase })
        .then(() => {
            res.redirect('/celebrities')
        })

        .catch(err => {
            console.log('Error! ', err)
            res.redirect('/new')
        })
})


router.get('/:celebrities_id', (req, res, next) => {

    const id = req.params.celebrities_id
    
    Celebrity.findById(id)
        .then(celebrityDetails => res.render('celebrities/celebrities-show', celebrityDetails))
        .catch(err => {
            console.log('Error! ', err)
            next()
        })
})

router.post('/:celebrities_id/delete', (req, res, next) => {
    
    const id = req.params.celebrities_id

    Celebrity.findByIdAndRemove(id)
        .then(() => res.redirect('/celebrities'))
        .catch(err => {
            console.log('Error!', err)
            next()
        })
})

router.get('/:celebrities_id/edit', (req, res, next) => {

    const id = req.params.celebrities_id

    Celebrity.findById(id)
        .then(celebrityDetails => res.render('celebrities/celebrities-edit', celebrityDetails)) 
        .catch(err => {
            console.log('Error!', err)
            next()
        })
})

router.post('/:celebrities_id', (req, res, next) => {
  
    const { name, occupation, catchPhrase } = req.body

    const id = req.params.celebrities_id

    Celebrity.findByIdAndUpdate(id, { name, occupation, catchPhrase })
        .then(() => res.redirect('/celebrities'))
        .catch(err => {
            console.log('Error!', err)
            next()
        })

})

module.exports = router
