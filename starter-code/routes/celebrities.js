const express = require('express');
const router = express.Router();
const Celebs = require('../models/celebrity');

/* GET celebrities page */
router.get('/', (req, res, next) => {
    Celebs.find()
        .then((result) => {
            res.render('celebrities/index', result)
        })
        .catch(err => next(err));
});

router.get('/:id', (req, res, next) => {
    Celebs.findById(req.params.celeb_id)
        .then((result) => {
            res.render('/celebrities/show', result);
        })
        .catch(err => next(err));
});