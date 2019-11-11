const express = require("express");
const router = express.Router();
const celebrity = require("../models/Celebrity")

router.get('/celebrities', (req, res) => {
    celebrity
        .find()
        .then(dbResp => {
            res.render("celebrities/index", {
                celebrities: dbResp,
                title: "List of super stars :",
                description: "Welcome to the list of the most amazing and shining stars of our world"
            })
        })
        .catch(err => console.log(err))
})

router.get('/celebrities/show/:id', (req, res) => {
    celebrity
        .findById(req.params.id)
        .then(dbResp => {
            res.render('celebrities/show', {
                celebrity: dbResp
            })
        })
        .catch(err => console.log(err))
})

router.get('/celebrities/new', (req, res) => {
    res.render("celebrities/new")
})

router.post('/celebrities/new', (req, res) => {
    const celebrityInput = {
        name: req.body.name,
        occupation: req.body.occupation,
        catchPhrase: req.body.catchPhrase
    }
    const newCelebrity = celebrity.create(celebrityInput);
    newCelebrity
        .then(
            res.redirect('/celebrities')
        )
        .save()
        .catch((err) => console.log(err))
})

router.post('/celebrities/delete/:id', (req, res) => {
    celebrity
        .findByIdAndDelete(req.params.id)
        .then(
            res.redirect('/celebrities')
        )
        .catch((err) => console.log(err))
})

router.get('/celebrities/edit/:id', (req, res) => {
    celebrity
        .findById(req.params.id)
        .then(dbResp => {
            res.render('celebrities/edit', {
                celebrity: dbResp
            })
        })
        .catch(err => console.log(err))
})

router.post('/celebrities/:id', (req, res) => {
    console.log(req.body, req.params.id)
    const editedCelebrity = {
        name: req.body.name,
        occupation: req.body.occupation,
        catchPhrase: req.body.catchPhrase
    }
    celebrity
        .findByIdAndUpdate(
            req.params.id, editedCelebrity)
        .then(dbRes => {
            res.redirect('/celebrities')
        })
        .catch(err => console.log(err))
})

module.exports = router;