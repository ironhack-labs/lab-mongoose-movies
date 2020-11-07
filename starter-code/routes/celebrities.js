const express = require('express');
const CelebrityModel = require('../models/Celebrity.model');

// require the Celebrity model here
const Celebrity = require('../models/Celebrity.model')

const router = express.Router();

router.get('/', (req, res, next) => {
    Celebrity.find().then((celebritiesFromDB) => {
        console.log(celebritiesFromDB)
        res.render('celebrities/index', { allTheCelebrities: celebritiesFromDB })
    })
});

router.get('/new', (req, res, next) => {
    res.render('celebrities/new')
});

router.get('/:id', (req, res, next) => {
    Celebrity.findById(req.params.id).then((celebrity) => {
        console.log(celebrity)
        res.render('celebrities/show', celebrity)
    })
});

router.post('/new', (req, res, next) => {
    console.log(req.body);
    Celebrity.create({ name: req.body.name, occupation: req.body.occupation, catchPhrase: req.body.catchPhrase }).then(() => {
        res.redirect('/')
    })
});


router.post('/:id/delete', (req, res, next) => {
    Celebrity.findByIdAndRemove(req.params.id).then(() => {
        res.redirect('/celebrities')
    })
});


module.exports = router;

