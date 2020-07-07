const express = require('express');
const router = express.Router();

const Celebrity = require('../models/Celebrity.model')

/* GET home page */
router.get('/celebrities', (req, res, next) => {
    Celebrity.find({})
        .then((celebritiesFromDB) => {
            res.render('celebrities/index', { celebritiesFromDB })
        })
        .catch((error) => next(error))
})

/* GET celebrity Detail */
router.get('/celebrities/:id/details', (req, res, next) => {
    const id = req.params.id
    // res.render('celebrities/details')
    console.log(id)
    Celebrity.findOne({ id: id })
        .then((celebrity) => {
            console.log(celebrity)
            res.render('celebrities/details', { cel: celebrity })
        })
        .catch((error) => next(error)) // Pasar error a la siguiente peticion 
})

/* GET New Celebrity */
router.get('/celebrities/new', (req, res, next) => {
    res.render('celebrities/new')
})

/* POST New Celebrity */

router.post('/celebrities/new', (req, res, next) => {

    const body = req.body
    Celebrity.create(body)
        .then(() => {
            res.redirect('/celebrities')
        })
        .catch(error => console.log(error))
})

/* GET Delete Celebrity */

router.get('/celebrities/:id/delete', (req, res, next) => {
    const id = req.params.id
    Celebrity.deleteOne({ id: id })
        .then(() => {
            res.redirect('/celebrities')
        })
        .catch(error => console.log(error))
})

/* GET Editing Celebrity */

router.get('/celebrities/:id/edit', (req, res, next) => {
    const id = req.params.id
    console.log(id)

    Celebrity.find({ id: id })
        .then((celebrityDB) => {
            res.render('celebrities/edit', { cel: celebrityDB })
        })
        .catch(error => console.log(error))
})

router.post('/celebrities/:id/edit', (req, res, next) => {
    const id = req.params.id
    const body = req.body

    Celebrity.findOneAndUpdate({ id: id }, body)
        .then((celebrityDB) => res.redirect('/celebrities'))
        .catch(error => console.log(error))
})

module.exports = router;