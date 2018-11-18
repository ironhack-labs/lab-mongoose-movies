const express = require('express');
const router = express.Router();
const Celebrity = require('../models/Celebrity')
const mongoose = require('mongoose');


router.get('/', (req, res, next) => {

    Celebrity.find({})
        .then(allCelebrities => {
            return res.render('celebrities', { allCelebrities });
        })
        .catch(err => {
            next();
            return err;
        })
});

router.get('/new', (req, res, next) => {
    res.render('celebrities/new');
});

router.post('/new', (req, res, next) => {

    const { name, occupation, catchPhrase } = req.body;
    const newCelebrity = new Celebrity({ name, occupation, catchPhrase });

    newCelebrity.save()
        .then((celebrity) => {
            console.log(celebrity);
            res.redirect('/celebrities/');
        })
        .catch(err => {
            console.log(err);
            return res.render('celebrities/new', { errorMessage: "There was an error, please resend the form" });
        })
});

router.get('/show/:celebrityId', (req, res, next) => {

    let id = req.params.celebrityId;

    Celebrity.findById(id)
        .then(celebrityData => {
            return res.render('celebrities/show', { celebrityData });
        })
        .catch(err => {
            next();
            return err;
        })
});

router.post('/:id/delete', (req, res, next) => {
    let id = req.params.id;

    Celebrity.findByIdAndRemove(id, (err, todo) => {

        if (err) return res.status(500).send(err);

        return res.redirect('/celebrities/');
    });
});

router.post('/:id/edit', (req, res, next) => {
    let id = req.params.id;
    Celebrity.findById(id)
        .then(celebrityData => {
            return res.render('celebrities/edit', { celebrityData });
        })
        .catch(err => {
            next();
            return err;
        })
});

// router.post('/edit', (req, res, next) => {

//     const { _id, name, occupation, catchPhrase } = req.body;
//     const newCelebrity = new Celebrity({ _id, name, occupation, catchPhrase });
//     newCelebrity.update({ _id: newCelebrity._id }, { $set: { newCelebrity } }, { new: true })
//         .then(() => {

//             res.redirect('/celebrities/');
//         })
//         .catch(err => {
//             console.log(err);
//             return res.render('celebrities/new', { errorMessage: "There was an error, please resend the form" });
//         })
// });

module.exports = router;