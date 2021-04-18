const express = require('express');
const router  = express.Router();
const Celebrity = require('../models/Celebrity.model.js');

router.get('/', (req, res) => {
    Celebrity.find({})
        .then(celebrities => {
            res.render('celebrities/index', {celebrities});
    })
    .catch(error => console.error(error));
})

router.post('/',(req, res) => {
    const name = req.body.name;
    const occupation = req.body.occupation;
    const catchPhrase = req.body.catchPhrase;

    Celebrity.create({name:name, occupation: occupation, catchPhrase: catchPhrase})
        .then(() => {
            res.redirect('/celebrities');
    })
    .catch(error => console.error(error));
})

router.get('/new', (req, res) => {
    res.render('celebrities/new');
})

router.get('/:id', (req, res) => {
    const id = req.params.id;
    Celebrity.findById(id)
        .then( celebrities => {
            res.render( 'celebrities/show', celebrities);
    })
    .catch(error => console.error(error));
});

router.post('/:id/delete', (req, res) => {
    const id = req.params.id;
    Celebrity.findByIdAndDelete(id)
    .then( () => {
        res.redirect('/celebrities');
    })
    .catch(error => console.error(error));
});

module.exports = router;