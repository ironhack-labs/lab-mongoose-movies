const express = require("express");
const router = express.Router();

const Celebrity = require("../models/celebrity");

router.get("/celebrities", (req, res, next) => {
    //console to know if it enters the route
    //console.log("Hi there");
    Celebrity.find()
    //once is in the route, render index-view
    .then(allTheCeleb => {
        console.log('you did it')
        res.render("celebrities/index-view", {allTheCeleb})})
        .catch(err => {
            next()
            console.log("Ha habido un PROBLEMA!", err)
            return error
        });});

router.get("/celebrities/new", (req, res, next) => res.render("celebrities/new"))

router.post('/celebrities/new', (req, res, next) => {
    console.log('hola');
    
    const {name, occ, catchPhrase } = req.body
    
    Celebrity.create({name, occ, catchPhrase })
    .then(() => res.redirect('/celebrities'))
    .catch(err => {
        next()
        console.log("Ha habido un PROBLEMA!", err)
        return error
    });})

router.get('/celebrities/:id', (req, res , next) => {
    Celebrity.findById(req.params.id)
    .then(celebDetails => res.render('celebrities/show', {celebDetails}))
    .catch(err => {
        next()
        console.log("Ha habido un PROBLEMA!", err)
        return error
    });
})

router.post('/:id/delete', (req, res, next) => {

    const {name, occ, catchPhrase } = req.body

    Celebrity.findByIdAndRemove(req.params.id, {name, occ, catchPhrase })
    .then(celebUpdt => res.redirect(`/celebrities`))
    .catch(err => {
        next()
        console.log("Ha habido un PROBLEMA!", err)
        return error
    })
})

router.get('/edit/:id', (req, res, next) => {

    Celebrity.findById(req.params.id)
        .then(celebEdited => res.render('celebrities/edit', celebEdited))
        .catch(err => {
            next()
            console.log("Ha habido un PROBLEMA!", err)
            return error
        })
})

router.post('/edit/:id', (req, res, next) => {

    const {name, occ, catchPhrase } = req.body

    Celebrity.findByIdAndUpdate(req.params.id, {name, occ, catchPhrase }, { new: true })
        .then(theUpdatedCeleb => res.redirect(`/celebrities`))
        .catch(err => {
            next()
            console.log("Ha habido un PROBLEMA!", err)
            return error
        })
})


module.exports = router;
