const express = require('express');
const router  = express.Router();
const Celebrity = require('../models/celebrity');


router.get('/celebrities', (req, res, next) =>{
    Celebrity.find()
    .then((celebrities) => {
        res.render('celebrities/index', {celebrities})
    })
    .catch(err => { console.log(`Error: ${err}`)});
});

router.get('/celebrities/new', (req, res, next) => {
    res.render('celebrities/new')
});

router.post('/celebrities/new', (req, res, next) => {
    const {name, occupation, catchPhrase} = req.body;
    Celebrity.create({name, occupation, catchPhrase})
    .then(res.redirect("/celebrities"))
    .catch(res.render('celebrities/new'));
});

router.get('/celebrities/:id', (req, res, next) =>{
    Celebrity.findById(req.params.id)
    .then((celebrities) => {
        res.render('celebrities/show', {celebrities})
    })
    .catch(err => { console.log(`Error: ${err}`)});
});



module.exports = router;
