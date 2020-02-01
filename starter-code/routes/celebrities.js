const express = require('express');
const router  = new express.Router();
const Celebrity = require("../models/Celebrity");

router.get('/index', (req,res) => {
    Celebrity
    .find()
    .then(celebrities => {
        res.render("celebrities/index", {
            celebrities
        });
    })
    .catch(dbErr => console.log(dbErr));
});

router.get('/new', (req, res) => {
    res.render('celebrities/new');
})

router.post('/new', (req,res) => {
    const {name, occupation, catchPhrase} = req.body;
    Celebrity.create({
        name,
        occupation,
        catchPhrase
    })
    .then(dbRes => res.redirect("/celebrities/index"))
    .catch(dbErr => {
        res.send("An Error Occurred, Try Again")
        res.render("celebrities/new")
        console.log(dbErr);

    });
});

router.get('/:id', (req, res, next) => {
    Celebrity
    .findById(req.params.id)
    .then(celebrity => {
        res.render("celebrities/show", {
            celebrity
        });
    })
    .catch(dbErr => {
        next;
        console.log(dbErr);
    });

});


module.exports = router;
