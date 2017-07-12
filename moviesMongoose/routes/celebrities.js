const express = require('express');
const router = express.Router();

const Celebrity = require('../models/celebrity')


router.get('/', (req, res, next) =>{
    Celebrity.find({}, (err, celebrities) => {
        if (err) {
            next(err);
        } else {
            console.log(celebrities);
            res.render('celebrities/index', { celebrities })
        }
    })
});

router.get('/:id', (req, res, next) => {
    const celebrityID = req.params.id;
    Celebrity.findById(celebrityID, (err, celebDetail) => {
        if (err) {
            next(err)
        } else  {
            res.render('celebrities/show', { celebDetail });
        }
    })
})


module.exports = router;