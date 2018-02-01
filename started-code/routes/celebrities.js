const express = require('express');
const router = express.Router();
const Celebrity = require('../models/Celebrity')

/* CRUD -> READ ALL */
router.get('/',(req, res, next) => {
    Celebrity.find().exec((err,celebrities) => {
        if(err){
            return next(err);
        }
        res.render('celebrities/index',{celebrities:celebrities});
    })
});

module.exports = router;