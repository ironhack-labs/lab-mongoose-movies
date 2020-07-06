const express = require('express');
const router = express.Router();

const Celebrity = require('../models/Celebrity.model')

/* GET home page */
router.get('/celebrities', (req, res, next) => {
    Celebrity.find({})
        .then((celebritiesFromDB) => {
            res.render('celebrities/index', { celebritiesFromDB })
        })
        .catch((error) => console.log(error))
})

router.get('/celebrities/:id', (req, res, next) => {
    const id = req.params.id
    // res.render('celebrities/details')
    console.log(id)
    Celebrity.findOne({ id: id })
        .then((celebrity) => {
            console.log(celebrity)
            res.render('celebrities/details', { cel: celebrity })
        })
        .catch((error) => console.log(error))
})

module.exports = router;