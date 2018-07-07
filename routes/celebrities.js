const express = require('express');
const router = express.Router();
const Celebrity = require('../models/celebrity');

/* GET home page */
router.get('/celebrities', (req, res, next) => {
    Celebrity.find()
        .then((result) => {

            res.render('celebrities/index', {result});//this result is making an array an object, which is the celebrity array
        })
});


//id is interchangable
router.get('/celebrities/:id', (req, res, next) => {
    const id = req.params.id;
    Celebrity.findById(id)
        .then((result) => {

            res.render('celebrities/show', result);//result is the id i think
        })
        .catch((err) => {
            next(err);
        })
});

router.get('/celebrities/new', (req, res, next) => {//just renders the new and doesn't include the changes. idk why they are split
    res.render('celebrities/new')
});

router.post('/celebrities/create', (req, res, next) => {
    //keys for creating a new guy
    const newPerson = new Celebrity({
        name: req.body.name,
        occupation: req.body.occupation,
        catchPhrase: req.body.catchPhrase
    });

    //saves to database

    newPerson.save()
        .then((response) => {
            res.redirect('/celebrities')//redirects to the page of celebrities
        })
        .catch((err) => {
            res.render('celebrities/new')//if error, reload page
        })
});

router.post('/celebrities/:id/delete', (req, res, next) => {
    const id = req.params.id;//saves the id for use
    Celebrity.findByIdAndRemove(id)
        .then((response) => {
            res.redirect('/celebrities');
        })
        .catch((err) => {
            next(err);
        })
});

router.get('/celebrities/:id/edit', (req, res, next) => {
    const id = req.params.id;
    Celebrity.findById(id)
        .then((result) => {

            res.render('celebrities/edit', result);//result is the id i think
        })
        .catch((err) => {
            next(err);
        })
});

router.post('/celebrities/:id', (req, res, next) => {
    const id = req.params.id;//saves the id for use
    Celebrity.findById(id)
        .then((result)=>{
            Celebrity.update(result);
        })
        .catch((err)=>{
            next(err);
        })
});


module.exports = router;
