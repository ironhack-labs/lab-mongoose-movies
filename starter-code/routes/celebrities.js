const express = require('express');
const router = express.Router();
const Celebrity = require('../models/Celebrity');

router.get('/', (req, res, next) => {
    Celebrity.find().exec((err, celebrities, next) => {

        if (err) { return next(err) }

        res.render('celebrities/index', {
            celebrities: celebrities
        });
    });
});

router.get('/show/:id', (req, res) => {
    const celeId = req.params.id;

    Celebrity.findById(celeId, (err, cele) => {
        if (err) { return next(err); }
        console.log("CELE :", cele)
            res.render('celebrities/show', { celebrities: cele});
     
    });
})

module.exports = router;