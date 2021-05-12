const router = require('express').Router()

const Celebrity = require('../models/Celebrity.model')

//routes

router.get('/celebrities', (req, res) => {
    Celebrity.find()
        .then(allCelebritiesDb => {
            console.log('celebrities2:',allCelebritiesDb)
            res.render('celebrities/list',{ celebrities: allCelebritiesDb})
        })
        .catch(e => console.log('error while listing celebrities'))
})

router.get('/celebrities/new', (req, res, next) => {
    console.log('entered to new')
    res.render('celebrities/new')
})

router.post('/celebrities/new', (req, res, next) => {
    const { name, occupation, catchPhrase } = req.body

    Celebrity.create( { name, occupation, catchPhrase } )
        .then(() => {
            console.log('Celebrity created succesfully')
            res.redirect('/celebrities')
        })
        .catch(() => {
            console.log('there was an error creating the celebrity')
            res.render('celebrities/new')
        })
})


router.get('/celebrities/:celebId', (req, res, next) => {
    const { celebId } = req.params

    Celebrity.findById(celebId)
        .then(celebFromDb => {
            console.log('oneCeleb:', celebFromDb)
            res.render('celebrities/show', {oneCeleb: celebFromDb})
        })
        .catch(e => {
            console.log('error while getting celebrity', e)
            next(e)
        })
})

router.post('/celebrities/:celebId/delete', (req, res, next) => {
    const { celebId } = req.params

    Celebrity.findByIdAndDelete(celebId)
        .then(celebFromDb => {
            console.log('oneCeleb:', celebFromDb)
            res.redirect('/celebrities')
        })
        .catch(e => {
            console.log('error while deleting celebrity')
        })
})

module.exports = router