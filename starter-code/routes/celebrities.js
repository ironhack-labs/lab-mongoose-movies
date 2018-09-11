const express    = require('express');
const router     = express.Router();
const Celebrity  = require('../models/Celebrity')

//get reqs always end in a res.render
//post reqs always end in a redirect

//get homepage celebrities
router.get('/celebrities', (req, res, next) => {
    Celebrity.find()
    .then((listOfCelebrities) => {
        res.render('celebrities/index', {theCelebrityList: listOfCelebrities})
    })
    .catch((err) => {
        next(err);
    })
})

//create a new celebrity listing
router.get('/celebrities/create', (req, res, next) => {
    res.render('celebrities/create');
})

//post a new celebrity listing
router.post('/celebrities/create', (req, res, next) => {
    Celebrity.create({
        name:        req.body.name,
        occupation:  req.body.occupation,
        catchphrase: req.body.catchphrase,
    })
    .then((response) => {
        res.redirect('/celebrities')
    })
    .catch((err) => {
        next(err);
    })
})

//delete a celebrity listing
router.post("/celebrities/delete/:id", (req, res, next) => {
    Celebrity.findByIdAndRemove(req.params.id)
    .then((response) => {
        res.redirect("/celebrities")
    })
    .catch((err) => {
        next(err);
    })
})

//get the edit for a celebrity listing
router.get("/celebrities/edit/:id", (req, res, next) => {
    Celebrity.findById(req.params.id)
    .then((theCelebrity) => {
        res.render('celebrities/edit', { celebrity: theCelebrity })
    })
    .catch((err) => {
        next(err);
    })
})

//post the edited celebrity listing
router.post("/celebrities/update/:id", (req, res, next) => {
    Celebrity.findByIdAndUpdate(req.params.id, {
        name:        req.body.name,
        occupation:  req.body.occupation,
        catchphrase: req.body.catchphrase
    })
    .then((response) => {
        res.redirect('/celebrities/' + req.params.id)
    })
    .catch((err) => {
        next(err);
    })
})

//get celebrity by id
router.get('/celebrities/:id', (req, res, next) => {
    Celebrity.findById(req.params.id)
    .then((theCelebrity) => {
        res.render('celebrities/show', { celebrity: theCelebrity })
    })
    .catch((err) => {
        next(err);
    })
})

module.exports = router;