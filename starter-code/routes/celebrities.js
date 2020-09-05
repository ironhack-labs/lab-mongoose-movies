const express = require('express')
const router = express.Router();
const Celebrity = require('../models/Celebrity')

router.get('/', (req, res, next) => {
    Celebrity.find()
        .then(data => {
            
            res.render('celebrities/index', {data})
        })
        .catch(err => {
            next(err)
        })
})
router.get('/view/:id', (req, res, next) => {
    Celebrity.findById(req.params.id)
        .then(data => {
            console.log(data)
            res.render('celebrities/show', data)
        })
        .catch(err => {
            next(err)
        })
})


module.exports = router;