const express = require("express");
const router = express.Router();

const Celebrity = require("../models/Celebrity.model");

router.get('/celebrities', (req, res, next) => {
    Celebrity.find()
        .then((dbCelebs) => res.render('celebrities/index', {
            dbCelebs
        }))
        .catch((error) => console.log(`There was an error: ${error}`));
});

router.get('/celebrities/new', (req, res, next) => {
    res.render('celebrities/new')
});

router.post('/celebrities/new', (req, res) => {
    const {
        name,
        occupation,
        catchPhrase
    } = req.body;

    const newCeleb = new Celebrity({
        name,
        occupation,
        catchPhrase
    })

    newCeleb
        .save()
        .then(() => res.redirect('/celebrities'))
        .catch((error) => {
            console.log(`Something went wrong when creating a new celeb, try again ${error}`),
                res.redirect('celebrities/new')
        });
});

router.get('/celebrities/:id', (req, res, next) => {
    const {
        id
    } = req.params;

    Celebrity.findById(id)
        .then((oneCeleb) => {
            res.render('celebrities/show', oneCeleb)
        })
        .catch((error) => console.log(`There was an error, while trying to find celeb: ${error}`));
});

router.get('/celebrities/:id/edit', (req, res, next) => {
    const {
        id
    } = req.params;

    Celebrity.findById(id)
        .then((foundCeleb) => {
            res.render('celebrities/edit', foundCeleb)
        })
        .catch((error) => console.log(`There was an error, while trying to find celeb: ${error}`));
});

router.post('/celebrities/:id/edit', (req, res, next) => {
    const {
        id
    } = req.params;

    const {
        name,
        occupation,
        catchPhrase
    } = req.body;

    Celebrity.findByIdAndUpdate(id, {
            name,
            occupation,
            catchPhrase
        }, {
            new: true
        })
        .then(() => res.redirect('/celebrities'))
        .catch((error) => {
            console.log(`Something went wrong when editing celeb, try again ${error}`),
                res.redirect('celebrities/edit')
        });
});

router.post('/celebrities/:id/delete', (req, res, next) => {
    const {
        id
    } = req.params;
    Celebrity.findByIdAndDelete(id)
        .then(() => res.redirect('/celebrities'))
        .catch((error) => console.log(`There was an error, while trying to delete celeb: ${error}`));
});

module.exports = router;