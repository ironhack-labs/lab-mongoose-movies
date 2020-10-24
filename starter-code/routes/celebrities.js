const express = require('express');
const Celebrity = require('../models/Celebrity');
const router = express.Router();

/* GET celebrities page */
router.get('/', (req, res, next) => {
    Celebrity.find()
        .then(celebrityDocs => {
            console.log(celebrityDocs)
            res.render('celebrities', { celebrityDocs })
        })
        .catch(error => {
            console.log(error)
        })
});

router.get('/show/:id', (req, res, next) => {
    const { id } = req.params
    Celebrity.findById(id)
        .then(result => {
            console.log(result)
            res.render('show', result)
        })
})

router.get('/new', (req, res, next) => {
    res.render('new')
})

router.post('/add', (req, res, next) => {
    console.log(req.body)
    const { name, occupation, catchPhrase } = req.body

    Celebrity.create({
        name,
        occupation,
        catchPhrase
    })
        .then(celebrity => {
            res.redirect('/celebrities')
        })
        .catch(err => {
            next(err)
        })
})

router.get('/delete/:id', (req, res, next) => {
    Celebrity.deleteOne({_id: req.params.id})
    .then(result => {
        res.redirect('/celebrities')
    })
    .catch(err => {
        next(err)
    })
})

module.exports = router;
