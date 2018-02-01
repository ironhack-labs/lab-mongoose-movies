
const express = require('express');
const Celebrity = require('../models/celebrity')

const router = express.Router();

router.get('/celebrities', (req, res, next) => {
    Celebrity.find({}, (err, celebrities) => {
        if(err){
            return next(err);
        }
        let data = {
            celebrities: celebrities
        };
        res.render('celebrities/index', data);
    });
});