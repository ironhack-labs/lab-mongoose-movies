const express = require('express');
const router = express.Router();
const Celebrities = require("../models/celebrity");


/* GET home page */
router.get('/celebrities', (req, res, next) => {
    Celebrities.find().then((celeb) => {
        // res.json(celeb)
        res.render('celebrities/index.hbs', {
            celeb
        })
    })
})
let id

router.get('/celebrities/add', (req, res, next) => {
    res.render('celebrities/add.hbs')
})

router.get('/celebrities/update', (req, res, next) => {
    res.render('celebrities/update.hbs')
})





router.get('/celebrities/:idCeleb?', (req, res, next) => {
    id = req.params.idCeleb
    // res.json(id)
    Celebrities.findById(id).then((celebShow) => {
        // res.json(celeb)
        res.render('celebrities/show.hbs', {
            celebShow
        })
    })
})




router.post('/celebritiesPOST', (req, res, next) => {
    Celebrities.create({
            name: req.body.name,
            occupation: req.body.occupation,
            catchPhrase: req.body.catchPhrase
        })
        .then(() => {
            res.redirect('/celebrities')
        })
})

router.get('/celebritiesDEL/:idCeleb', (req, res, next) => {
    id = req.params.idCeleb
    // res.json(id)
    Celebrities.findByIdAndDelete(req.params.idCeleb)
        .then(() => {
            res.redirect('/celebrities')
        })
})

router.get('/celebrities/update/:idCeleb', (req, res, next) => {
    id = req.params.idCeleb
    Celebrities.findById(id)
        .then((celebUpd) => {
            res.render('celebrities/update.hbs', {
                celebUpd
            })
        })
})

router.post('/celebritiesUPD/:idCeleb', (req, res, next) => {
    id = req.params.idCeleb
    // res.json(id)
    Celebrities.findByIdAndUpdate(id, {
            name: req.body.name,
            occupation: req.body.occupation,
            catchPhrase: req.body.catchPhrase
        })
        .then(() => {
            res.redirect('/celebrities')
        })
})



module.exports = router;