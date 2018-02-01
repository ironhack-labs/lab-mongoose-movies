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
    const productId = req.params.id;

    Product.findById(productId, (err, cele) => {
        if (err) { return next(err); }
        Celebrity.find({ cele: productId }, (err) => {
            
            res.render('celebrities/show', { celebrities: celebrities});
        })
    });
})

module.exports = router;