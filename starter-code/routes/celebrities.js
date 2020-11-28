const express = require('express');
const router  = express.Router();

const Celebrity = require("../models/Celebrity.js");


router.get('/celebrities', (req, res, next) =>{
    Celebrity.find()
        .then(celebrities=>{
            res.render('celebrities/index', {celebrities});
        })
        .catch(err => {
            console.log("there is an erro in returning the celebrities");
        });
});
router.get('/celebrities/new', (req, res, next) => {
    res.render('celebrities/new');
});


router.post('/celebrities/new', (req, res, next) => {

    const newCelebrity = req.body;

    Celebrity.create(newCelebrity)
        .then(() => {
            res.redirect('/celebrities');
        })
        .catch(err => {
            console.log ('Error while creating new celebrity');
        });
});

router.get('/celebrities/:id', (req, res, next)=>{
    const celebrityId = req.params.id;
    Celebrity.findById(celebrityId)
        .then(celebrity => {
            res.render('celebrities/show', celebrity);
        })
        .catch(err=>{
            console.log("there is an error in returning the celebrity details");
        });
});
router.post('/celebrities/:id/delete', (req, res, next) => {
    const celebrityId = req.params.id;
    Celebrity.findByIdAndDelete(celebrityId)
     .then(() => {
         res.redirect('/celebrities');
     })
     .catch(err => {
         return err;
     });
});
router.get('/celebrities/:id/edit', (req, res, next) => {
    const celebrityId = req.params.id;

    Celebrity.findById(celebrityId)
        .then(celebrity => {
            res.render('celebrities/edit', celebrity);
        })
        .catch(err => {
            console.log("error while editing celebrities");
            return err;
        });
});



module.exports = router;