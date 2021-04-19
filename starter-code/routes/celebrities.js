const express = require('express');
const {render} = require('../app');
const router = express.Router();
const Celebrity = require('../models/Celebrity.model')

router.get('/', (req, res, next) => {
    Celebrity.find({})
    .then((celebrities) => res.render("celebrities/index", {celebrities}))
    .catch((error) => next(error))
})

router.get('/:id', (req, res) => {
    const { id } = req.params;
    Celebrity.findById({ _id: id })
    .then((celebrity) => res.render("celebrities/show", celebrity))
    .catch((error) => next(error))
})

module.exports = router;
