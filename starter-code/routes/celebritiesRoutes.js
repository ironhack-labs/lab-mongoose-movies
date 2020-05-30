const express = require('express');
const router = express.Router();

const Celebrity = require('../models/celebrity')

router.get('/new', (req, res, next) => {
    res.render('celebrities/new-celebrity');
})

router.post('/create', async (req, res, next) => {
    try {
        const {name, occupation, catchPhrase} = req.body;
        const newCelebrity = new Celebrity({name, occupation, catchPhrase});
        await Celebrity.create(newCelebrity)
        res.redirect('/')
    } catch (err) {
        console.log('Error creating celebrity: ' + err);
        res.render('celebrities/new-celebrity');
    }
})

module.exports = router;