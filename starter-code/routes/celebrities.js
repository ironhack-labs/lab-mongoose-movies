const express = require('express');
const router = express.Router();
const Celebrity = require('../models/Celebrity.model')

router.get('/', (req, res, next) => {
    Celebrity.find({})
    .then((celebrities) => res.render("celebrities/index", {celebrities}))
    .catch((error) => next(error))
})

module.exports = router;

