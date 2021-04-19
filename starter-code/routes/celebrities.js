const express = require('express');
const Celebrity = require('../models/Celebrity.model');
const router = express.Router();

router.get('/', (req, res, next) => {
    Celebrity.find({})
        .then(celebrities => {
            res.render('celebrities/index', {celebrities});
        })
        .catch(error => next(error))
});

router.get('/new', (req, res) => {
    res.render('celebrities/new');
});

router.post('/new', (req, res, next) => {
    const {name, occupation, catchPhrase} = req.body;
    Celebrity.create({name, occupation, catchPhrase})
        .then(() => {
            res.redirect('/celebrities')
        })
        .catch(error => next(error));
});

router.post('/:id/delete', (req, res, next) => {
    const { id } = req.params;
    Celebrity.findByIdAndRemove(id)
        .then(() => res.redirect('/celebrities'))
        .catch((error) => next(error));
});

router.get('/:id', (req, res) =>{
    const { id } = req.params;
    Celebrity.findOne({_id: id})
        .then(celebrities=> {
            res.render('celebrities/show', {celebrities})
        })
        .catch(error => console.log(error))
})



module.exports = router;