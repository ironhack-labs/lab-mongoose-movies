const express = require('express');
const router = express.Router();

const Celebrity = require('../models/celebrity')

router.get('/', async (req, res, next) => {
    try {
        const allCelebrities = await Celebrity.find({});
        res.render('celebrities/celebrities', {celebrities: allCelebrities});
    } catch (error) {
        console.log('Error listing celebrities: ' + error);
    }
})

router.get('/new', (req, res, next) => {
    res.render('celebrities/new-celebrity');
})

router.post('/create', async (req, res, next) => {
    try {
        const {name, occupation, catchPhrase} = req.body;
        const newCelebrity = new Celebrity({name, occupation, catchPhrase});
        await Celebrity.create(newCelebrity)
        res.redirect('/')
    } catch (error) {
        console.log('Error creating celebrity: ' + error);
        res.render('celebrities/new-celebrity');
    }
})

module.exports = router;