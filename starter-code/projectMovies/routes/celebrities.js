const express = require('express');


//require de Celebrity model here
const Celebrity = require('../models/Celebrity').Celebrity;

const router = express.Router();

router.get('/', (req, res, next) => {
    Celebrity.find({}, (err, celebrities) => {
        if(err) {
            next(err);
        } else {

            const data = {
                celebrities: celebrities
            }
            console.log(data)
         res.render('celebrities/index', data);
        }
    });
});

router.get('/:id', (req, res, next) => {
      const id = req.params.id;
        Celebrity.findById(id, (err, celebrities) => {
            if (err) {
                next(err);
            } else {
                const data = {
                    celebrities: celebrities
                };
                console.log(data)
                res.render('celebrities/show', data);
            }
        });

    });








module.exports = router;