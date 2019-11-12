/* -------------------------------------------------------------------------------------------------------------------------------------- */
/*                                                            Celebrities ROUTE                                                           */
/* -------------------------------------------------------------------------------------------------------------------------------------- */

const express = require('express');
const router = express.Router();
const Celebrity = require('../models/Celebrity')

/* GET home page */
router.get('/', (req, res, next) => {
    Celebrity.find({})
        .then(documents => {
            res.render('celebrities/index', { celebrities: documents })
            // console.log(documents)
        })
        .catch(err => {
            console.log(err)
        })
});

router.get('/new', (req, res, next) => {
    res.render('celebrities/new')
});

router.get('/:id', (req, res, next) => {
    Celebrity.findById(req.params.id)
        .then(document => {
            res.render('celebrities/show', { celebrity: document })
            // console.log(document)
        })
        .catch(err => {
            console.log(err)
        })
});


router.post('/', (req, res, next) => {
    Celebrity.create({
        name: req.body.name,
        occupation: req.body.occupation,
        catchPhrase: req.body.catchPhrase
    })
        .then(() => {
            res.redirect('/celebrities')
        })
        .catch(err => {
            console.log(err)
        })
});

router.get('/:id/edit', (req, res, next) => {
    Celebrity.findById(req.params.id)
        .then((document) => {
            res.render('celebrities/edit', { celebrity: document })
        })
        .catch(err => {
            console.log(err)
        })
})

router.post('/:id', (req, res, next) => {
    Celebrity.updateOne(
        { _id: req.params.id },
        {
            name: req.body.name,
            occupation: req.body.occupation,
            catchPhrase: req.body.catchPhrase
        }
    )
        .then(() => {
            res.redirect('/celebrities/' + req.params.id)
        })
})

router.post('/:id/delete', (req, res, next) => {
    Celebrity.findByIdAndRemove(req.params.id)
        .then(() => {
            console.log(req.params.id)
            res.redirect('/celebrities')
        })
        .catch(err => {
            console.log(err)
        })
});


module.exports = router;