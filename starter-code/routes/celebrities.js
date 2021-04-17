const express = require('express');
const Celebrity = require('../model/Celebrity.model.js');
const router = express.Router();

router.get('/', (req, res, next) => {
    Celebrity.find({}).then( celebrities => {
        console.log(celebrities)
        res.render( 'celebrities/index', { celebrities } );
    })
    .catch(error => next(error));
});

router.get('/new', (req, res, next) => {
    res.render('celebrities/new');
});

router.post('/', (req, res, next) => {
    console.log(req.body);
    const { name, occupation, catchPhrase } = req.body;
    Celebrity.create({ name, occupation, catchPhrase })
    .then( () => res.redirect('/celebrities'))
    .catch(error => res.render('celebrities/new', { error }));
});

router.get('/:id', (req, res, next) => {
    const { id } = req.params;
    Celebrity.findById(id).then( celebrity => {
        console.log(celebrity)
        res.render( 'celebrities/show', celebrity );
    })
    .catch(error => next(error));
});

module.exports = router;
