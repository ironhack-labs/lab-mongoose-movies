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

router.post('/:celebrityId/delete', async (req, res, next) => {
    try {
        await Celebrity.findByIdAndDelete(req.params.celebrityId);
        res.redirect('/celebrities')
    } catch (error) {
        console.log('Error deleting celebrity: ' + error);
    }
})

router.get('/:celebrityId/edit', async (req, res, next) => {
    try {
        const oneCelebrity = await Celebrity.findById(req.params.celebrityId);
        res.render('celebrities/edit-celebrity', oneCelebrity);
    } catch (error) {
        console.log('Error editing celebrity: ' + error);
    }
})

router.post('/:celebrityId', async (req, res, next) => {
    try {
        const {name, occupation, catchPhrase} = req.body;
        await Celebrity.findByIdAndUpdate(req.params.celebrityId, {name, occupation, catchPhrase});
        res.redirect('/celebrities/' + req.params.celebrityId);
    } catch (error) {
        console.log('Error editing celebrity: ' + error);
    }

})

router.get('/:celebrityId', async (req, res, next) => {
    try {
        const singleCelebrity = await Celebrity.findById(req.params.celebrityId);
        res.render('celebrities/celebrity-details', singleCelebrity);
    } catch (error) {
        console.log('Error detailing a celebrity: ' + error)
    }
})

module.exports = router;