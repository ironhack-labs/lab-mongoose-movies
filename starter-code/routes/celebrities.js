const express = require('express');
const router  = express.Router();
const Celebrity = require('../models/Celebrity.model.js');

router.get('/', (req, res) => {
    Celebrity.find({})
        .then(celebrities => {
            res.render('celebrities/index', {celebrities});
    })
    .catch(error => console.error(error));
})

router.get('/:id', (req, res) => {
    const id = req.params.id;
    Celebrity.findById(id)
        .then( celebrities => {
            res.render( 'celebrities/show', celebrities);
    })
    .catch(error => console.error(error));
});

module.exports = router;