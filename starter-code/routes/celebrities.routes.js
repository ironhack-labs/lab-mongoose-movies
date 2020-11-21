const express = require('express');
const router  = express.Router();
const Celebrity = require('../models/celebrity');


router.get('/celebrities', (req, res, next) =>{
    Celebrity.find()
    .then((celebrities) => {
        res.render('celebrities/index', celebrities)
    })
    .catch(err => { console.log(`Error: ${err}`)});
});

router.get('/celebrities/:id', (req, res, next) =>{
    Celebrity.findById(req.params.id)
    .then((celebrities) => {
        res.render('celebrities/show', {celebrities})
    })
    .catch(err => { console.log(`Error: ${err}`)});
});


module.exports = router;
