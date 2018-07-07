const express = require('express');
const router = express.Router();
const Celebrity = require('../models/celebrity');

/* GET home page */
router.get('/celebrities', (req, res, next) => {
    Celebrity.find()
        .then((result) => {

            res.render('celebrities/index', {result});//this result is making an array an object, which is the celebrity array
        })
});

//id is interchangable
router.get('/celebrities/:id', (req, res, next) => {
    const id = req.params.id;
    Celebrity.findById(id)
        .then((result) => {

            res.render('celebrities/show', result);//result is the id i think
        })
        .catch((err)=>{
            next(err);
        })
});

router.get('/celebrities/new', (req, res, next) => {//just renders the new and doesn't include the changes. idk why they are split
    res.render('celebrities/new')
});

router.get('/celebrities/create', (req, res, next) => {//keys for creating a new guy
    const newGuy = new newGuy({

    })
});

module.exports = router;
