const express = require('express');
const Celebrity = require('../models/celebrity');

const router  = express.Router();

router.get('/', function(req, res, next) {
    Celebrity.find({},(err, celebrities) => {
        if (err) {
            next(err);
        } else {
            res.render('celebrities/index',{ celebrities });
        }
    });
    
});

router.get('/new', (req, res, next) => {
    res.render('celebrities/new');
});

router.get('/:id', function(req, res, next) {
    Celebrity.findOne({"_id" : req.params.id},(err, celebrity) => {
        if (err) {
            next(err);
        } else {
            res.render('celebrities/show', { celebrity });
        }
    });   
});


router.post('/:id', function(req, res, next) {
    const updateCelebrity = {
        name: req.body.name,
        occupation: req.body.occupation,
        catchPhrase: req.body.catchphrase,
    };

   Celebrity.findByIdAndUpdate(req.params.id, updateCelebrity, (err, celebrity) => {
        if (err) {
            next(err);
        } else {
            res.redirect('/celebrities');
        }
    });   
});


router.post('/:id/delete', (req, res, next) => {
     Celebrity.findByIdAndRemove({"_id" : req.params.id},(err, celebrity) => {
        if (err) {
            next(err);            
        } else {
             res.redirect('/celebrities');
        }
    });     
});


router.get('/:id/edit', (req, res, next) => {
     Celebrity.findOne({"_id" : req.params.id},(err, celebrity) => {
        if (err) {
            next(err);
        } else {
            res.render('celebrities/edit', { celebrity });
        }
    });    
});

router.post('/', (req, res, next) => {
    const celebrityInfo = {
        name: req.body.name,
        occupation: req.body.occupation,
        catchPhrase: req.body.catchphrase,
    };

    const newCelebrity = new Celebrity( celebrityInfo );
    newCelebrity.save((err) => {
        if (err) {
            next(err);
        } else {
            res.redirect('/celebrities');
        }
    });

});



module.exports = router;

