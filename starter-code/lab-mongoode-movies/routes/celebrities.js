const express = require('express');
const router  = express.Router();
const Celebrity = require('../models/celebrity');

router.get('/', async function (req, res, next) {
   try {
        let celebrities = await Celebrity.find();
        res.status(200)
            .render("celebrities/index", {
                celebrities: celebrities
            });

    } catch(err) {

       next(err);
   }

});

router.get('/new', function (req, res, next) {
        res.status(200)
            .render("celebrities/new");
});

router.get('/:id', async function (req, res, next) {
    try {
        let celebrity = await Celebrity.findById(req.params.id);

        res.status(200)
            .render("celebrities/show", {
                celebrity: celebrity
            });

    } catch(err) {

        next(err);
    }

});

module.exports = router;