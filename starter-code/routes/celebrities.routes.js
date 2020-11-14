const express = require('express')
const Celebrity = require('../models/celebrity.model')
const router = express.Router()


router.get('/', (req, res) => {

        Celebrity
                .find()
                .then(allCelebs => res.render('celebs/index.hbs', { allCelebs }))
                .catch(err => console.log(err))
        
})


router.get('/new', (req, res) => res.render('celebs/new.hbs'))

router.post('/', (req, res) => {

        const { name, occupation, catchPhrase } = req.body


        if (!name || !occupation || !catchPhrase) {
                res.render('celebs/new.hbs', { errorMsg: 'Completa todos los campos' })
                return
        }

        Celebrity
                
                .create(req.body)
                .then(res.redirect('/celebrities'))
                .catch(err => console.log('Error al añadir un nuevo celebrity', err))
        
})


router.post('/:id/delete', (req, res) => {

        Celebrity
                .findByIdAndRemove(req.params.id)
                .then(res.redirect('/celebrities'))
                .catch(err => console.log(err))
})



router.get('/:id', (req, res) => {


        Celebrity
                
                .findById(req.params.id)
                .then(allInfo => res.render('celebs/show.hbs', { allInfo }))
                .catch(err => console.log(err))


})


router.post('/:id', (req, res) => {

        const { name, occupation, catchPhrase } = req.body

        Celebrity
                .findByIdAndUpdate(req.params.id, { name, occupation, catchPhrase })
                .then(res.redirect('/celebrities'))
                .catch(err => console.log(err))           

})


router.get('/:id/edit', (req, res) => {


        Celebrity       
                
                .findById(req.params.id)
                .then(celebDet => res.render('celebs/edit', { celebDet }))
                .catch(err => console.log(err))

})




module.exports = router