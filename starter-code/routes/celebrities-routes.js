const express = require('express');
const router = express.Router();
const Celebrities = require('../models/celebrity');

router.get('/', (req, res) => {
    Celebrities.find()
    .then(celebs =>{
        res.render('celebrities/celebrities', { celebs });
    })
    .catch(err => {
        throw new Error (err);
    });
});

router.get('/new', (req, res) => {
    res.render('celebrities/new-celebrity');
});

router.post('/create',  async (req, res) => {
    const newCelebrity = new Celebrities({ ...req.body });
    try {
        await newCelebrity.save();
        res.redirect('./');
    } catch (error){
        res.render('celebrities/new-celebrity');
        throw new Error(error);
    }
});


module.exports = router;
