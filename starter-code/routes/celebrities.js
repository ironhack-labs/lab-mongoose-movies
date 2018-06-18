const express = require('express');
const router  = express.Router();
const celebrities = require('../models/celebrity.js');

/* GET celebrities page */
router.get('/', (req, res, next) => {
    celebrities.find()
        .then(celebrity => {
            // res.send(celebrity);
            res.render('celebrities/index', {celebrity});
        })
        .catch(err => {
            console.log('The wreck train is here to swoop you: ', err);
            next();
        });
});

router.get('/:id', (req, res, next) => {
    celebrities.findOne({_id: req.params.id})
        .then(celeb => {
            res.render('celebrities/show', {celeb});
            // res.send(celeb.name);
        })
        .catch(err => {
            console.log('Req res next can you tell the difference?: ', err);
            next();
        });
});

router.get('/new', (req, res, next) => {
    res.render('celebrities/new');
});

router.post('/', (req, res, next) => {
    const {name, occupation, catchPhrase} = req.body;
    const newCeleb = new celebrities({name, occupation, catchPhrase});
    newCeleb.save()
        .then(celeb => {
            res.redirect('/celebrities');
        })
        .catch(err => {
            console.log('Dat booty too much for you??: ', err);
            next();
        });
});

router.post('/:id/delete', (req, res, next) => {
    celebrities.findByIdAndRemove(req.params.id)
        .then(celeb => {
            res.redirect('/celebrities');
        })
        .catch(err => {
            console.log('You\'ve been caught by the error train: ', err);
            next();
        });
});

router.get('/:id/edit', (req, res, next) => {
    celebrities.findOne({_id: req.params.id})
        .then(celeb => {
            // res.send(celeb)
            // res.send(req.params.id)
            res.render('celebrities/edit', {celeb});
        })
        .catch(err => {
            console.log('If you try and edit me, I will edit your life: ', err);
        });
});

router.post('/:id', (req, res, next) => {
    const {name, occupation, catchPhrase} = req.body;
    celebrities.findByIdAndUpdate({_id: req.params.id}, 
        {name, occupation, catchPhrase}
    )
    .then(celeb => {
        res.redirect('/celebrities/' + req.params.id);
    })
    .catch(err => {
        console.log('Error, the celebrities don\'t want you to edit them', err);
    });
});

module.exports = router;
