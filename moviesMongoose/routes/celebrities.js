const express = require('express');
const router = express.Router();

const Celebrity = require('../models/celebrity')


router.get('/celebrities', (req, res, next) =>{
    Celebrity.find({}, (err, celebrities) => {
        if (err) {
            next(err);
        } else {
            console.log(celebrities);
            res.render('celebrities/index', { celebrities })
        }
    })
});

module.exports = router;