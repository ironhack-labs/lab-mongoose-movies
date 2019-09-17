const express = require('express');
const router = express.Router();
const Celebrity = require('../models/celebrity')


/* GET home page */
router.get('/celebrities', (req, res, next) => {
    Celebrity.find()
        .then((allCelebrities) => {
            console.log(allCelebrities)
            res.render('celebrities/index', { celebs: allCelebrities })
        })
        .catch((err) => {
            next(err);
        })
})


router.get('/celebrities/details/:theid', (req, res, next) => {
    let id = req.params.theid

    Celebrity.findById(id)
        .then((celebrityObject) => {
            console.log(celebrityObject)
            res.render('celebrities/details', { theCelebrity: celebrityObject })
        })
        .catch((err) => {
            next(err);
        })
})

router.get('/celebrities/new', (req, res, next) => {
    res.render('celebrities/new');
})

router.post('/celebrity/creation', (req, res, next) => {

    let name = req.body.theName;
    let occupation = req.body.theOccupation;
    let catchPhrase = req.body.theCatchphrase;

    Celebrity.create({
            name: name,
            occupation: occupation,
            catchPhrase: catchPhrase
        })
        .then(() => {
            res.redirect('/celebrities')
        })
        .catch((err) => {
            next(err);
        })
})

router.post('/celebrities/delete/:id', (req, res, next) => {
    let id = req.params.id;

    Celebrity.findByIdAndRemove(id)
        .then((result) => {
            res.redirect('/celebrities')
        })
        .catch((err) => {
            next(err)
        })
})


module.exports = router;