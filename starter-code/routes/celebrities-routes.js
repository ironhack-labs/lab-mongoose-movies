const express = require('express');
const router = express.Router();
const Celebrity = require('../models/Celebrity.model')



//GET "Add Form" for a new celebrity
router.get('/celebrities/new', (req, res) => {
    res.render('celebrities/new-celebrity')
});


//POST "New form" for a new celebrity
router.post('/celebrities/create', (req, res) => {
    // console.log(req.body);
    Celebrity.create(req.body)
        .then(createdCelebrityFromDb => {
            const {
                name,
                occupation,
                catchPhrase
            } = createdCelebrityFromDb
            // console.log('Successfully created a new celebrity', celebritiesDb)
            res.send(`
            <h1>Name: ${name}</h1>
            <h1>Occupation: ${occupation}</h1>
            <h1>Phrase: ${catchPhrase}</h1>
            `);
            // res.redirect
            //
        })
        .catch(err => console.log(`Err while creating a new celebrity in the DB: ${err}`))
})


//GET list of all celebrities
router.get('/celebrities-list', (req, res) => {
    
    Celebrity.find()
    .then(allCelebrities => {
        res.render('celebrities/celebrities-list', {allCelebrities})

    })
    .catch(err => console.log('Error while getting all celebrities from DB', err)
    )
});



module.exports = router;