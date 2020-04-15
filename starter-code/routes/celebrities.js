
const express = require('express');
const router = express.Router();

const Celebrity = require('../models/celebrity')


//GET celebrities

router.get('/', (req, res, next) => {
    Celebrity.find().then((c) => {
        res.render('celebrities/index', {celebritiesArr: c});
    })
});

//GET /celebrities/:id/edit -----> show our form 


module.exports = router;