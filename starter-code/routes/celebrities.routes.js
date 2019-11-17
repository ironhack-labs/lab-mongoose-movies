const express = require('express');
const router = express.Router();

const Celebrity = require('../models/celebrity.model')

router.get('/', (req, res) => {
    Celebrity.find()
        .then(allCelebrities => res.render('celebrities', {
        celeb: allCelebrities
        }))
        .catch(err => console.log("Error finding all celebrities: ", err))
});

router.get('/:id', (req, res) => {
    Celebrity.findById(req.params.id)
        .then(oneCelebrity => res.render('celebrity-show', {
            oneCeleb: oneCelebrity
        }))
        .catch(err => console.log("Error finding one celeb: ", err))
});

module.exports = router