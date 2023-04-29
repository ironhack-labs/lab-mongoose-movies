const express = require('express');
const router = express.Router();

//require the celeb model here
const Celebrity = require('../models/celebrity.model')


//GET /celebs
router.get('/celebrities', (req, res, next) => {
    Celebrity.find()
        .then((allCelebsFromDB) => {
            console.log('Retrieved celebs from DB:', allCelebsFromDB)
            res.render('/celebrities/index', { allCelebs: allCelebsFromDB })
        })
        .catch((err) => {
            console.log('error with finding celebDB', err)
        });
});


//GET /add celeb
router.get('/celebrities/new', (req, res, next) => {
    res.render('celebrities/new')
        .then()
        .catch(error => console.log(`Error validating this personality: ${error}`))
})

//POST /add celeb
router.post('/celebrities', (req, res, next) => {
    const { name, occupation, catchPhrase } = req.body
    Celebrity.create({ name, occupation, catchPhrase })
        .then(res.redirect('/celebrities'))
        .catch((error) => console.log(`Error validating this personality: ${error}`),
            res.redirect("celebrities/new"))
})

//GET /celebs details
router.get('/celebrities/:id', (req, res, next) => {
    const { id } = req.params;
    Celebrity.findById(id)
        .then(celebsDetails => {
            res.render('celebrities/show', celebsDetails)
        })

        .catch(error => console.log(`Error while updating a single drone: ${error}`))
})


