const express = require('express');
const router = express.Router();
const Celebrity = require("../models/Celebrity");


//GET celebrity
router.get('/celebrity', (req, res, next) => {
    Celebrity.find()
        .then(celebrity => {
            res.render("celebrity/index", {
                celebrity
            });
        })
        .catch(error => {
            console.log(error)
        })
});


//GET Details
router.get('/celebrity/:id', (req, res, next) => {
    Celebrity.findById(req.params.id)
        .then(celebrity => {
            res.render("celebrity/show", {
                celebrity
            });
        })
        .catch(error => {
            console.log(error)
        })
});

//GET New
router.get('/newCeleb', (req, res, next) => {
    res.render("celebrity/newCeleb");
});

router.post("/newCeleb", (req, res) => {
    const {
        name,
        occupation,
        catchPhrase
    } = req.body;
    const celebrity = new Celebrity({
        name,
        occupation,
        catchPhrase
    });
    celebrity.save(err => {
        if (err) {
            return next(err)
        }
        res.redirect('/celebrity');
    });
});

//DELETE celebrity
router.post("/celebrity/:id/delete", (req, res) => {
    Celebrity.findByIdAndRemove(req.params.id, () => res.redirect('/celebrity'))
});

//EDIT celebrity
router.get("/celebrity/edit/:id", (req, res, next) => {
    let celebrityId = req.params.id;
    Celebrity.findOne({
            '_id': celebrityId
        })
        .then(celebrity => {
            res.render("celebrity/edit", celebrity);
        })
        .catch(error => {
            console.log(error)
        })
});

router.post("/celebrity/:id", (req, res, next) => {
    const {
        name,
        occupation,
        catchPhrase
    } = req.body;
    Celebrity.findByIdAndUpdate(req.params.id, {
            $set: {
                name,
                occupation,
                catchPhrase
            }
        })
        .then(() => {
            res.redirect("/celebrity");
        })
});

module.exports = router;