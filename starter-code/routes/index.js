const express = require('express');
const router = express.Router();
const Celebrity = require("../models/celebrity")

/* GET home page */
router.get('/', (req, res, next) => {
    res.render('index');
});

//Iteration #2: Listing Our Celebrities
router.get('/celebrities/index', (req, res, next) => {
    Celebrity
        .find()
        .then((allCelebrities) => {
            res.render('celebrities/index', { allCelebrities });
        }).catch(error => {
            console.log(error);
        })
});

//Iteration #4: Adding New Celebrities
router.get('/celebrities/new', (req, res, next) => {
    res.render('celebrities/new')
});

router.post('/celebrities/new_celebrity', (req, res, next) => {
    Celebrity
        .create({
            name: req.body.name,
            occupation: req.body.occupation,
            catchPhrase: req.body.catchPhrase
        })
        .then(newCeleb => {
            res.redirect("/celebrities/index")
        }).catch(error => res.redirect("/celebrities/new"))
});

//Iteration #3: The Celebrity Details Page
router.get('/celebrities/:id', (req, res, next) => {
    Celebrity
        .findById(req.params.id)
        .then(celeb => {
            res.render("celebrities/show", { celeb })
        }).catch(error => {
            console.log(error);
        })
});

//Iteration #5: Deleting Celebrities
router.post('/celebrities/:id/delete', (req, res, next) => {
    console.log(req.params.id)
    Celebrity
        .findByIdAndDelete(req.params.id)
        .then(delCeleb => {
            res.redirect("/celebrities/index")
        }).catch(error => {
            next(error);
        })
});

// Iteration #6 (Bonus): Editing Celebrities
router.get('/celebrities/:id/edit', (req, res, next) => {
    Celebrity
        .findById(req.params.id)
        .then(celeb => {
            res.render("celebrities/edit", { celeb })
        }).catch(error => {
            console.log(error);
        })
});

router.post('/celebrities/:id', (req, res, next) => {
    Celebrity
        .updateOne({ _id: req.params.id }, {
            name: req.body.name,
            occupation: req.body.occupation,
            catchPhrase: req.body.catchPhrase
        })
        .then(celeb => {
            console.log("respuesta del update:" + celeb.catchPhrase)
            res.redirect("/celebrities/index")
        }).catch(error => {
            console.log("error de update")
            next(error);
        })
});


module.exports = router;