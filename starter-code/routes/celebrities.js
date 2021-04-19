const express = require('express');
const {render} = require('../app');
const router = express.Router();
const Celebrity = require('../models/Celebrity.model')

router.get('/', (req, res, next) => {
    Celebrity.find({})
    .then((celebrities) => res.render("celebrities/index", {celebrities}))
    .catch((error) => next(error))
})

router.get('/new', (req, res) => {
    res.render("celebrities/new");
})

router.post('/new', (req, res) => {
   const { name, ocupattion, catchPhrase } = req.body;
   Celebrity.create({ name, ocupattion, catchPhrase })
   .then(()=> res.redirect('/celebrities'))
   .catch(() => res.render('celebrities/new'))
})

router.get('/:id', (req, res) => {
    const { id } = req.params;
    Celebrity.findById({ _id: id })
    .then((celebrity) => res.render("celebrities/show", celebrity))
    .catch((error) => next(error))
})

router.post('/:id/delete', (req, res) => {
    const { id } = req.params;
    Celebrity.findByIdAndRemove({ _id: id })
    .then(()=> res.redirect('/celebrities'))
    .catch((error) => next(error))
})

module.exports = router;
