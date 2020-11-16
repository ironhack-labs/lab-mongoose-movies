const express = require('express');
const router = express.Router();

const Celebrity = require('../models/Celebrity.model');


//listing celebrities
router.get('/', (req, res) => {
    Celebrity
        .find()
        .then(allCelebrities => res.render('celebrities/index', { allCelebrities }))
        .catch((error) => console.log(`You're not getting celebrities: ${error}`))
});

// detail of celebrity
router.get('/show/:celebrities_id', (req, res) => {
    Celebrity
        .findById(req.params.celebrities_id)
        .then(theCelebrity => res.render('celebrities/show', theCelebrity))
        .catch((error) => console.log(`You're not getting detail of celebrity: ${error}`));
});

// add new celebrity

//get
router.get('/new', (req, res) => res.render('celebrities/new'));

//post
router.post('/new', (req, res) => {
    const { name, occupation, catchPhrase } = req.body;
    
    Celebrity
        .create({ name, occupation, catchPhrase })
        .then(() => res.redirect('/celebrities'))
        .catch((error) => console.log(`You're not adding a new celebrity: ${error}`));
});

// delete celebrity

router.get('/delete-celebrity', (req, res) => {
    const celebID = req.query.celebrities_id;

    Celebrity
        .findByIdAndDelete(celebID)
        .then(() => res.redirect('/celebrities'))
        .catch((error) => console.log(`You're not deleting a new celebrity: ${error}`));
});

// editing celibrity

// get
router.get('/edit', (req, res) => {
    const celebID = req.query.celebrities_id;

    Celebrity
        .findById(celebID)
        .then(celebInfo => res.render('celebrities/edit', celebInfo))
        .catch((error) => console.log(`You're not deleting a new celebrity: ${error}`));
})

//post
router.post('/edit', (req, res) => {

    const celebID = req.query.celebrities_id;

    const { name, occupation, catchPhrase } = req.body;

    Celebrity
        .findByIdAndUpdate(celebID, { name, occupation, catchPhrase })
        .then(celebInfo => res.redirect('/celebrities'))
        .catch((error) => console.log(`You're not deleting a new celebrity: ${error}`));
})

// router.post('/edit', (req, res) => {
    
//     const celebID = req.query.celebrities_id;

//     const { name, occupation, catchPhrase } = req.body;
    
//     Celebrity
//         .findByIdAndUpdate(celebID, { name, occupation, catchPhrase })
//         .then(celebInfo => res.redirect('/celebrities', celebInfo))
//         .catch((error) => console.log(`You're not editing the celebrity: ${error}`));
    
// })
module.exports = router;