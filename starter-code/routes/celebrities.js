const express = require('express');
const router = express.Router();

const Celebrity = require('../models/celebrity')

// READ
// GET /celebrities
router.get('/', (req, res, next) => {

    Celebrity.find().then((celebrities) => {
        console.log('all my celebrities: ' + celebrities)
        let obj = {
            allCelebrities: celebrities
        }
        res.render('./celebrities/celeb-list', obj);
    })

});


router.get('/show/:identifier', (req, res) => {

    console.log(req.params.identifier)

    Celebrity.findById(req.params.identifier).then((celeb) => {
        let obj = {
            oneCelebrity: celeb
        }
        res.render('./celebrities/show', obj);
    })

})


// CREATE
// GET /celebrities/add
// this is the form
router.get('/new', (req, res, next) => {

    Celebrity.find().then((newceleb) => {
        res.render('./celebrities/new', {
            newCelebrity: newceleb

        });
        console.log("my new celeb: " + newceleb)
    })

});


// CREATE
// POST /celebrities/add
router.post('/new', (req, res) => {

    console.log("req.body", req.body)

    let celebrity = new Celebrity({
        name: req.body.name,
        occupation: req.body.occupation,
        catchPhrase: req.body.catchPhrase
    })

    celebrity.save().then(() => {
        res.redirect('/celebrities')
    })

})


// UPDATE
// GET /celebrities/:identifier/edit -> show the form
router.get('/:identifier/edit', (req, res, next) => {

    Celebrity.findById(req.params.identifier).then((celebrity) => {
        
        res.render('celebrities/edit', {
            myCelebrity: celebrity
        })
    })

})

// UPDATE
// POST /celebrities/edit
router.post('/:identifier/edit', (req, res, next) => {

    console.log("req.body", req.body)

    Celebrity.findByIdAndUpdate(req.params.identifier, {
        name: req.body.name,
        occupation: req.body.occupation,
        catchPhrase: req.body.catchPhrase
    }).then(() => {
        res.redirect('/celebrities')
    })

})


// DELETE
// POST /celebrities/delete/:identifier
router.post('/delete/:identifier', (req, res) => {

    console.log(req.params.identifier)

    Celebrity.findByIdAndDelete(req.params.identifier).then(() => {
        res.redirect('/celebrities')
    })

})





module.exports = router;