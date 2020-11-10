const express = require("express");
const router = express.Router();
const Celebrity = require("../models/Celebrity.model");

// GET Listing all celebrities Iteration 2
router.get('/celebrities', (req, res, next) => {
    Celebrity.find()
        .then((foundCelebsFromDB) =>
            res.render("celebrities/index", {
                foundCelebsFromDB
            })
        )
        .catch((error) => {
            next(error);
        });
});

// GET Adding new celebrities Iteration 4
router.get("/celebrities/new", (req, res) => res.render("celebrities/new"));

// POST Adding new celebrities Iteration 4

router.post("/celebrities", (req, res) => {
    const {
        name,
        occupation,
        catchPhrase
    } = req.body;

    const newCeleb = new Celebrity({
        name,
        occupation,
        catchPhrase
    });

    newCeleb
        .save()
        .then(() => res.redirect("/celebrities"))
        .catch(() => {
            res.render("celebrities/new");
    
        });
});


// GET List specific information about celeb Iteration 3 
router.get("/celebrities/:id", (req, res, next) => {
    const {
        id
    } = req.params;

    Celebrity.findById(id)
        .then((foundCeleb) => res.render("celebrities/show", foundCeleb))
        .catch((error) => next(error));
});



// POST Delete celebrities Iteration 5


router.post("/celebrities/:id/delete", (req, res, next) => {
    const {
        id
    } = req.params

    Celebrity.findByIdAndDelete(id)
        .then(() => res.redirect("/celebrities"))
        .catch((error) => next(error));
});

// GET Update celebries Iteration 6

router.get("/celebrities/:id/edit", (req, res, next) => {
    const {
        id
    } = req.params;

    Celebrity.findById(id)
        .then((foundCelebsFromDB) =>
            res.render("celebrities/edit", foundCelebFromDB))
        .catch((error) => next(error));
});

// POST Update celebrities Iteration 6
router.post("/celebrities/:id", (req, res, next) => {
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
        .then((updatedCeleb) => res.redirect("/celebrities"))
        .catch((error) => next(error));
});

module.exports = router;