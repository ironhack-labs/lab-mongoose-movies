const express = require("express");
const router = express.Router();
const celebrity = require("../models/Celebrity")


router.get('/celebrities/new', (req, res) => {
    res.render("celebrities/new")
})

router.post('/celebrities/new', (req, res) => {
    const celebrityInput = {
        name: req.body.name,
        occupation: req.body.occupation,
        catchPhrase: req.body.catchPhrase
    }
    console.log(req.body)
    const newCelebrity = celebrity.create(celebrityInput);
    newCelebrity
        .then(
            res.redirect('/celebrities')
        )
        .save()
        .catch((err) => console.log(err))
})

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

router.get('/celebrities/:id', (req, res) => {
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
    res.render('celebrities/new')
})





module.exports = router;