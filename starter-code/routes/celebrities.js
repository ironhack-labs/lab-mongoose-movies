const express = require('express');
const Celebrity = require('../models/Celebrity.model');
const router = express.Router();

router.get('/', (req, res) => {
    Celebrity.find({})
    .then(celebrities => {
        console.log(celebrities)
        res.render('celebrities/index', {celebrities}) //{resultado del fin}
    })
    .catch((err) => {
        //next('route')
        console.error(err);
    })
})

module.exports = router;