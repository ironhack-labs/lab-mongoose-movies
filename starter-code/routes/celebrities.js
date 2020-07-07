const express = require('express');
const router = express.Router();
const celebrityModel = require('./../models/Celebrity')

router.get('/', (req, res, next) => {
    celebrityModel.find()
        .then((celebrities) => res.render('celebrities/index', { celebrities }))
        .catch(next)
});

router.get('/:id', (req, res, next) => {
    celebrityModel.findById(req.params.id)
        .then((oneCelebrity) => res.render('celebrities/show', oneCelebrity ))
        .catch(next)
});



module.exports = router;