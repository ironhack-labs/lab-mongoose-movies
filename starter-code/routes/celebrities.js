const express = require('express');
const router  = express.Router();
const Celebrities = require('../models/Celebrity');

router.get('/', (req, res, next) => {
    Celebrities.find()
    .then(celebs => res.render('celebrities/index', {celebs}))
    .catch(error => console.log(error));
});

router.get('/:id', (req, res, next) => {
    Celebrities.findById(req.params.id)
    .then(celeb => res.render('celebrities/show', celeb))
    .catch(error => console.log(error));
});

module.exports = router;