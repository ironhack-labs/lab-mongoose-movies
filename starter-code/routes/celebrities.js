const express = require('express');
const router  = express.Router();
const Celebrity = require('../models/Celebrity');


router.get('/celebrities', (req, res, next) => {
    Celebrity.find()
        .then(celebrities=>{
            res.render('celebrities/index', {celebrities})
        })
        .catch(err => {
            next.call
            return err
        })
});

router.get('/celebrities/:id', (req, res, next)=>{
    const id = req.params.id
    Celebrity.findById(id)
        .then(celebrity => {
            res.render('celebrities/show', celebrity)
        })
        .catch(err=>{
            next.call
            return err
        })
})









module.exports = router;
