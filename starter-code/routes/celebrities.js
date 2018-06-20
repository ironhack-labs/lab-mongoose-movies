const express = require('express');
const router = express.Router();
const Celebrity = require('../models/celebrities');

router.get('/celebrities', (req, res, next) => {

    Celebrity.find().then(celebrities => {
        res.render('celebrities/index', {
            celebrities
        });
    }).catch(err => {
        console.log(err)
    })

});

router.post('/celebrities', (req, res, next) => {

    if (req.body.name == "" || req.body.occupation == "" || req.body.catchPhrase == "") {
        res.render('celebrities/new', {
            errorMessage: "All fields are required!"
        });
    } else {

        const newCeleb = new Celebrity({
            name: req.body.name,
            occupation: req.body.occupation,
            catchPhrase: req.body.catchPhrase
        });

        newCeleb.save().then(result => {
            res.redirect('celebrities');
        }).catch(err => {
            console.log(err)
        })

    }

});

router.get('/celebrities/new', (req, res, next) => {
    res.render('celebrities/new');
});

router.get('/celebrities/:id', (req, res, next) => {
    let celebrityId = req.params.id;
    Celebrity.findOne({
        '_id': celebrityId
    }).then(celebrity => {
        res.render('celebrities/show', {
            celebrity
        });
    }).catch(err => {
        console.log(err)
    })

});

router.post('/celebrities/:id', (req, res, next) => {
    let celebrityId = req.params.id;

    if (req.body.name == "" || req.body.occupation == "" || req.body.catchPhrase == "") {

        next("All fields are required!");

    } else {

        const {
            name,
            occupation,
            catchPhrase
        } = req.body;

        Celebrity.update({
            '_id': celebrityId
        }, {
            $set: {
                name,
                occupation,
                catchPhrase
            }
        }).then(celebrity => {
            res.redirect('/celebrities');
        }).catch(err => {
            console.log(err)
        })
    }

});

router.get('/celebrities/:id/edit', (req, res, next) => {
    let celebrityId = req.params.id;
    Celebrity.findOne({
        '_id': celebrityId
    }).then(celebrity => {
        res.render('celebrities/edit', {
            celebrity
        });
    }).catch(err => {
        console.log(err)
    })

});

router.post('/celebrities/:id/delete', (req, res, next) => {
    let celebrityId = req.params.id;
    Celebrity.findByIdAndRemove(celebrityId).then(celebrity => {
        res.redirect('celebrities');
    }).catch(err => {
        console.log(err)
    })

});



module.exports = router;