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

router.get('/celebrities/:id',(req, res, next) => {
    const celebrityId = req.params.id;

    Celebrity.findById(celebrityId ,(err,celebrity) => {
        if(err){return next(err);}
            res.render('celebrities/show',{celebrity:celebrity});      
        })
    });

module.exports = router;